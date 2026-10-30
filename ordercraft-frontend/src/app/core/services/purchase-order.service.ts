import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  PurchaseOrder,
  PurchaseOrderRequest,
  PurchaseOrderItem
} from '../../shared/models/procurement-invoice.model';
import { SupplierService } from './supplier.service';
import { MaterialService } from './material.service';
import { OrderService } from './order.service';
import { INITIAL_PURCHASE_ORDERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  private http = inject(HttpClient);
  private supplierService = inject(SupplierService);
  private materialService = inject(MaterialService);
  private orderService = inject(OrderService);

  private readonly API_URL = '/api/purchase-orders';

  private purchaseOrders: PurchaseOrder[] = [...INITIAL_PURCHASE_ORDERS];

  getAll(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(this.API_URL).pipe(
      tap((data) => {
        if (data && data.length) this.purchaseOrders = [...data];
      }),
      catchError(() => of(this.purchaseOrders))
    );
  }

  getById(id: number): Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>(`${this.API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.purchaseOrders.find((p) => p.id === id);
        return of(found || this.purchaseOrders[0]);
      })
    );
  }

  createManualPO(request: PurchaseOrderRequest): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(this.API_URL, request).pipe(
      tap((created) => this.purchaseOrders.unshift(created)),
      catchError(() => {
        let supplier: any = null;
        this.supplierService.getById(request.supplierId).subscribe((s) => (supplier = s));

        let linkedOrder: any = undefined;
        if (request.orderId) {
          this.orderService.getOrderById(request.orderId).subscribe((o) => (linkedOrder = o));
        }

        let total = 0;
        const items: PurchaseOrderItem[] = request.items.map((it, idx) => {
          let material: any = null;
          this.materialService.getById(it.materialId).subscribe((m) => (material = m));
          const unitCost = material ? material.unitCost : 100;
          const lineTotal = unitCost * it.quantity;
          total += lineTotal;
          return {
            id: idx + 1,
            material: material || {
              id: it.materialId,
              code: 'MAT-RAW',
              name: 'Raw Material',
              unit: 'kg',
              stockQty: 10,
              unitCost: unitCost
            },
            quantity: it.quantity,
            unitCost: unitCost,
            lineTotal: lineTotal
          };
        });

        const newPO: PurchaseOrder = {
          id: Math.max(...this.purchaseOrders.map((p) => p.id || 0), 0) + 1,
          poNo: `PO-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
          supplier: supplier || { id: request.supplierId, name: 'Precision Supplier', email: '', phone: '', address: '' },
          salesOrder: linkedOrder,
          poDate: new Date().toISOString().split('T')[0],
          status: 'DRAFT',
          totalAmount: total,
          items: items
        };

        this.purchaseOrders.unshift(newPO);
        return of(newPO);
      })
    );
  }

  generateForSalesOrder(orderId: number): Observable<PurchaseOrder[]> {
    return this.http.post<PurchaseOrder[]>(`${this.API_URL}/generate/sales-order/${orderId}`, {}).pipe(
      tap((createdList) => {
        if (createdList && createdList.length) {
          this.purchaseOrders.unshift(...createdList);
        }
      }),
      catchError(() => {
        // Mock fallback auto-generation from shortages
        let requirements: any[] = [];
        this.orderService.getOrderBom(orderId).subscribe((reqs) => (requirements = reqs));

        const shortages = requirements.filter((r) => r.shortageQty > 0);
        if (shortages.length === 0) {
          return of([]);
        }

        let linkedOrder: any = undefined;
        this.orderService.getOrderById(orderId).subscribe((o) => (linkedOrder = o));

        // Group by supplier
        const grouped: Record<number, any[]> = {};
        for (const req of shortages) {
          const suppId = req.supplierId || 1;
          if (!grouped[suppId]) grouped[suppId] = [];
          grouped[suppId].push(req);
        }

        const generated: PurchaseOrder[] = [];
        for (const suppIdStr of Object.keys(grouped)) {
          const suppId = Number(suppIdStr);
          let supplier: any = null;
          this.supplierService.getById(suppId).subscribe((s) => (supplier = s));

          let totalAmount = 0;
          const items: PurchaseOrderItem[] = grouped[suppId].map((req, idx) => {
            let material: any = null;
            this.materialService.getById(req.materialId).subscribe((m) => (material = m));
            const unitCost = material ? material.unitCost : 100;
            const lineTotal = unitCost * req.shortageQty;
            totalAmount += lineTotal;
            return {
              id: idx + 1,
              material: material || {
                id: req.materialId,
                code: req.materialCode,
                name: req.materialName,
                unit: req.unit,
                stockQty: req.availableQty,
                unitCost: unitCost
              },
              quantity: req.shortageQty,
              unitCost: unitCost,
              lineTotal: lineTotal
            };
          });

          const newPO: PurchaseOrder = {
            id: Math.max(...this.purchaseOrders.map((p) => p.id || 0), 0) + 1 + generated.length,
            poNo: `PO-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
            supplier: supplier || { id: suppId, name: grouped[suppId][0].supplierName || 'Industrial Vendor', email: '', phone: '', address: '' },
            salesOrder: linkedOrder,
            poDate: new Date().toISOString().split('T')[0],
            status: 'DRAFT',
            totalAmount: totalAmount,
            items: items
          };

          generated.push(newPO);
        }

        this.purchaseOrders.unshift(...generated);
        return of(generated);
      })
    );
  }

  receivePO(id: number): Observable<PurchaseOrder> {
    return this.http.put<PurchaseOrder>(`${this.API_URL}/${id}/receive`, {}).pipe(
      tap((received) => {
        const idx = this.purchaseOrders.findIndex((p) => p.id === id);
        if (idx !== -1) this.purchaseOrders[idx] = received;
      }),
      catchError(() => {
        const po = this.purchaseOrders.find((p) => p.id === id);
        if (po) {
          po.status = 'RECEIVED';
          // Increment stock in material service
          for (const item of (po.items || [])) {
            this.materialService.adjustStock(item.material.id || 0, item.quantity);
          }
          return of(po);
        }
        return of(this.purchaseOrders[0]);
      })
    );
  }
}
