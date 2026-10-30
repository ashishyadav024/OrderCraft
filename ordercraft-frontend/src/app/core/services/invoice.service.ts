import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  Invoice,
  InvoiceCreateRequest,
  Payment,
  PaymentRequest
} from '../../shared/models/procurement-invoice.model';
import { OrderService } from './order.service';
import { INITIAL_INVOICES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private http = inject(HttpClient);
  private orderService = inject(OrderService);

  private readonly API_URL = '/api/invoices';

  private invoices: Invoice[] = [...INITIAL_INVOICES];

  getAll(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.API_URL).pipe(
      tap((data) => {
        if (data && data.length) this.invoices = [...data];
      }),
      catchError(() => of(this.invoices))
    );
  }

  getById(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.invoices.find((i) => i.id === id);
        return of(found || this.invoices[0]);
      })
    );
  }

  createInvoice(request: InvoiceCreateRequest): Observable<Invoice> {
    return this.http.post<Invoice>(this.API_URL, request).pipe(
      tap((created) => this.invoices.unshift(created)),
      catchError(() => {
        let order: any = null;
        this.orderService.getOrderById(request.orderId).subscribe((o) => (order = o));

        const subtotal = order ? order.totalAmount : 50000;
        const taxRate = request.taxRatePercent != null ? request.taxRatePercent : 18.0;
        const taxAmount = Number(((subtotal * taxRate) / 100).toFixed(2));
        const totalAmount = Number((subtotal + taxAmount).toFixed(2));

        const due =
          request.dueDate ||
          new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const newInvoice: Invoice = {
          id: Math.max(...this.invoices.map((i) => i.id || 0), 0) + 1,
          invoiceNo: `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
          salesOrder: order || { id: request.orderId, orderNo: `SO-${request.orderId}`, totalAmount: subtotal },
          invoiceDate: new Date().toISOString().split('T')[0],
          dueDate: due,
          subtotal: subtotal,
          taxAmount: taxAmount,
          totalAmount: totalAmount,
          status: 'UNPAID',
          payments: []
        };

        this.invoices.unshift(newInvoice);
        this.orderService.updateOrderStatus(request.orderId, 'INVOICED');
        return of(newInvoice);
      })
    );
  }

  recordPayment(invoiceId: number, request: PaymentRequest): Observable<Payment> {
    return this.http.post<Payment>(`${this.API_URL}/${invoiceId}/payments`, request).pipe(
      tap((payment) => {
        const inv = this.invoices.find((i) => i.id === invoiceId);
        if (inv) {
          if (!inv.payments) inv.payments = [];
          inv.payments.push(payment);
        }
      }),
      catchError(() => {
        const inv = this.invoices.find((i) => i.id === invoiceId);
        const newPayment: Payment = {
          id: Math.floor(Math.random() * 10000) + 1,
          amount: request.amount,
          paymentDate: new Date().toISOString().split('T')[0],
          method: request.method,
          referenceNo: request.referenceNo || `TXN-${Math.floor(Math.random() * 899999 + 100000)}`
        };

        if (inv) {
          if (!inv.payments) inv.payments = [];
          inv.payments.push(newPayment);

          const totalPaid = inv.payments.reduce((acc, curr) => acc + curr.amount, 0);
          if (totalPaid >= inv.totalAmount) {
            inv.status = 'PAID';
            if (inv.salesOrder?.id) {
              this.orderService.updateOrderStatus(inv.salesOrder.id, 'PAID');
            }
          } else {
            inv.status = 'PARTIAL';
          }
        }

        return of(newPayment);
      })
    );
  }
}
