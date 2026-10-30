import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  Order,
  SalesOrderRequest,
  MaterialRequirementResponse
} from '../../shared/models/order.model';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';
import { MaterialService } from './material.service';
import { BomService } from './bom.service';
import { INITIAL_ORDERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private http = inject(HttpClient);
  private customerService = inject(CustomerService);
  private productService = inject(ProductService);
  private materialService = inject(MaterialService);
  private bomService = inject(BomService);

  private readonly API_URL = '/api/orders';

  private orders: Order[] = [...INITIAL_ORDERS];
  private orderBomsMap: Record<number, MaterialRequirementResponse[]> = {};

  constructor() {
    // Generate initial BOM shortage calculation for existing initial orders
    this.calculateMockOrderBom(1);
    this.calculateMockOrderBom(2);
    this.calculateMockOrderBom(3);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_URL).pipe(
      tap((data) => {
        if (data && data.length) this.orders = [...data];
      }),
      catchError(() => of(this.orders))
    );
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.orders.find((o) => o.id === id);
        return of(found || this.orders[0]);
      })
    );
  }

  createOrder(request: SalesOrderRequest): Observable<Order> {
    return this.http.post<Order>(this.API_URL, request).pipe(
      tap((created) => this.orders.unshift(created)),
      catchError(() => {
        // Fallback calculation in mock mode
        let customer: any = null;
        this.customerService.getById(request.customerId).subscribe((c) => (customer = c));

        let total = 0;
        const items = request.items.map((it, idx) => {
          let product: any = null;
          this.productService.getById(it.productId).subscribe((p) => (product = p));
          const unitPrice = product ? product.unitPrice : 10000;
          const lineTotal = unitPrice * it.quantity;
          total += lineTotal;
          return {
            id: idx + 1,
            productId: it.productId,
            product: product || { id: it.productId, name: 'Industrial Assembly', sku: 'PROD-AUTO' },
            quantity: it.quantity,
            unitPrice: unitPrice,
            lineTotal: lineTotal
          };
        });

        const newId = Math.max(...this.orders.map((o) => o.id || 0), 0) + 1;
        const newOrder: Order = {
          id: newId,
          orderNo: `SO-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
          customer: customer || { id: request.customerId, name: 'Premier Client Ltd' },
          customerName: customer ? customer.name : 'Premier Client Ltd',
          orderDate: new Date().toISOString().split('T')[0],
          status: 'CONFIRMED',
          totalAmount: total,
          items: items
        };

        this.orders.unshift(newOrder);
        this.calculateMockOrderBom(newId);
        return of(newOrder);
      })
    );
  }

  getOrderBom(orderId: number): Observable<MaterialRequirementResponse[]> {
    return this.http.get<MaterialRequirementResponse[]>(`${this.API_URL}/${orderId}/bom`).pipe(
      tap((data) => {
        if (data) this.orderBomsMap[orderId] = data;
      }),
      catchError(() => {
        if (!this.orderBomsMap[orderId]) {
          this.calculateMockOrderBom(orderId);
        }
        return of(this.orderBomsMap[orderId] || []);
      })
    );
  }

  updateOrderStatus(orderId: number, status: Order['status']): void {
    const o = this.orders.find((item) => item.id === orderId);
    if (o) {
      o.status = status;
    }
  }

  private calculateMockOrderBom(orderId: number): void {
    const order = this.orders.find((o) => o.id === orderId);
    if (!order || !order.items) return;

    const requirements: Map<number, { required: number; material: any }> = new Map();

    for (const item of order.items) {
      const prodId = item.productId || (item.product && item.product.id) || 1;
      let bomItems: any[] = [];
      this.bomService.getBomByProduct(prodId).subscribe((b) => (bomItems = b));

      for (const b of bomItems) {
        const mat = b.material;
        const needed = b.qtyPerUnit * item.quantity;
        const existing = requirements.get(mat.id);
        if (existing) {
          existing.required += needed;
        } else {
          requirements.set(mat.id, { required: needed, material: mat });
        }
      }
    }

    const result: MaterialRequirementResponse[] = [];
    requirements.forEach((val) => {
      const mat = val.material;
      const reqQty = Number(val.required.toFixed(2));
      const availQty = Number((mat.stockQty || 0).toFixed(2));
      const shortage = reqQty > availQty ? Number((reqQty - availQty).toFixed(2)) : 0;

      result.push({
        materialId: mat.id,
        materialCode: mat.code,
        materialName: mat.name,
        unit: mat.unit,
        requiredQty: reqQty,
        availableQty: availQty,
        shortageQty: shortage,
        supplierId: mat.supplier ? mat.supplier.id : undefined,
        supplierName: mat.supplier ? mat.supplier.name : 'Apex Suppliers'
      });
    });

    this.orderBomsMap[orderId] = result;
  }
}
