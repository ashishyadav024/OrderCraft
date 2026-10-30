import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { OrderService } from './order.service';
import { PurchaseOrderService } from './purchase-order.service';
import { InvoiceService } from './invoice.service';
import { MaterialService } from './material.service';
import { ProductService } from './product.service';

export interface DashboardMetrics {
  totalRevenue: number;
  activeOrdersCount: number;
  pendingPoCount: number;
  unpaidInvoicesAmount: number;
  criticalStockMaterialsCount: number;
  lowStockMaterials: any[];
  recentOrders: any[];
  workflowStages: {
    salesOrdersCount: number;
    bomExplodedCount: number;
    purchaseOrdersCount: number;
    goodsReceivedCount: number;
    invoicedCount: number;
    paidCount: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private orderService = inject(OrderService);
  private poService = inject(PurchaseOrderService);
  private invoiceService = inject(InvoiceService);
  private materialService = inject(MaterialService);
  private productService = inject(ProductService);

  private readonly API_URL = '/api/dashboard';

  getMetrics(): Observable<DashboardMetrics> {
    // 1. Primary: Direct dedicated Backend Dashboard Telemetry API
    return this.http.get<DashboardMetrics>(this.API_URL).pipe(
      catchError(() => {
        // Fallback: Aggregate across individual services if backend aggregation is unavailable
        return this.aggregateFromServices();
      })
    );
  }

  private aggregateFromServices(): Observable<DashboardMetrics> {
    return forkJoin({
      orders: this.orderService.getOrders().pipe(catchError(() => of([]))),
      pos: this.poService.getAll().pipe(catchError(() => of([]))),
      invoices: this.invoiceService.getAll().pipe(catchError(() => of([]))),
      materials: this.materialService.getAll().pipe(catchError(() => of([]))),
      products: this.productService.getAll().pipe(catchError(() => of([])))
    }).pipe(
      map(({ orders, pos, invoices, materials }) => {
        const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

        const activeOrders = orders.filter(
          (o) => o.status === 'CONFIRMED' || o.status === 'IN_PRODUCTION'
        );

        const pendingPOs = pos.filter((p) => p.status === 'DRAFT' || p.status === 'SENT');

        const unpaidInvoices = invoices.filter(
          (i) => i.status === 'UNPAID' || i.status === 'PARTIAL'
        );
        const unpaidAmount = unpaidInvoices.reduce((sum, i) => {
          const paid = (i.payments || []).reduce((pSum, p) => pSum + (p.amount || 0), 0);
          return sum + Math.max(0, (i.totalAmount || 0) - paid);
        }, 0);

        const lowStock = materials.filter((m) => (m.stockQty || 0) < 50);

        const confirmedOrders = orders.filter((o) => o.status === 'CONFIRMED').length;
        const inProdOrders = orders.filter((o) => o.status === 'IN_PRODUCTION').length;
        const invoicedOrders = orders.filter((o) => o.status === 'INVOICED').length;
        const paidOrders = orders.filter((o) => o.status === 'PAID').length;
        const goodsReceived = pos.filter((p) => p.status === 'RECEIVED').length;

        return {
          totalRevenue,
          activeOrdersCount: activeOrders.length,
          pendingPoCount: pendingPOs.length,
          unpaidInvoicesAmount: unpaidAmount,
          criticalStockMaterialsCount: lowStock.length,
          lowStockMaterials: lowStock,
          recentOrders: orders.slice(0, 5),
          workflowStages: {
            salesOrdersCount: orders.length,
            bomExplodedCount: confirmedOrders + inProdOrders,
            purchaseOrdersCount: pos.length,
            goodsReceivedCount: goodsReceived,
            invoicedCount: invoicedOrders,
            paidCount: paidOrders
          }
        };
      })
    );
  }
}
