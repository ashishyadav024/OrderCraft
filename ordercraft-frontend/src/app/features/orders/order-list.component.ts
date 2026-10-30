import { Component, OnInit, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { timeout, finalize } from 'rxjs';
import { Navbar } from '../../shared/components/navbar/navbar';
import { OrderService } from '../../core/services/order.service';
import { CustomerService } from '../../core/services/customer.service';
import { ProductService } from '../../core/services/product.service';
import { PurchaseOrderService } from '../../core/services/purchase-order.service';
import { InvoiceService } from '../../core/services/invoice.service';
import { Order, OrderStatus, MaterialRequirementResponse } from '../../shared/models/order.model';
import { Customer } from '../../shared/models/customer.model';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    Navbar
  ],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  private orderService = inject(OrderService);
  private customerService = inject(CustomerService);
  private productService = inject(ProductService);
  private poService = inject(PurchaseOrderService);
  private invoiceService = inject(InvoiceService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  orders: Order[] = [];
  filteredOrders: Order[] = [];
  customers: Customer[] = [];
  products: Product[] = [];

  displayedColumns: string[] = ['orderNo', 'customer', 'status', 'itemsCount', 'totalAmount', 'orderDate', 'actions'];
  isLoading = true;
  errorMessage = '';

  // Filtering & Search
  searchTerm = '';
  selectedStatusFilter = 'ALL';

  // Details & BOM Drawer
  selectedOrder: Order | null = null;
  bomRequirements: MaterialRequirementResponse[] = [];
  isLoadingBom = false;
  isGeneratingPO = false;
  poSuccessMessage = '';

  // New Order Modal
  isCreateModalOpen = false;
  orderForm = this.fb.group({
    customerId: [null as number | null, Validators.required],
    items: this.fb.array([])
  });

  // Invoice Generation Modal
  isInvoiceModalOpen = false;
  invoiceOrderId: number | null = null;
  invoiceDueDate = '';
  invoiceTaxRate = 18.0;
  invoiceMessage = '';

  get itemsFormArray(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  ngOnInit(): void {
    this.fetchOrders();
    this.loadDropdownData();
  }

  loadDropdownData(): void {
    this.customerService.getAll().subscribe((c) => {
      this.customers = c || [];
      this.cdr.detectChanges();
    });
    this.productService.getAll().subscribe((p) => {
      this.products = p || [];
      this.cdr.detectChanges();
    });
  }

  fetchOrders(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.orderService.getOrders().pipe(
      timeout(10000),
      finalize(() => { this.ngZone.run(() => { this.isLoading = false; this.cdr.detectChanges(); }); })
    ).subscribe({
      next: (data) => {
        this.ngZone.run(() => { this.orders = data || []; this.applyFilter(); this.isLoading = false; this.cdr.detectChanges(); });
      },
      error: () => {
        this.ngZone.run(() => { this.errorMessage = 'Failed to load orders. Check backend connection.'; this.isLoading = false; this.cdr.detectChanges(); });
      }
    });
  }

  applyFilter(): void {
    let result = [...this.orders];

    if (this.selectedStatusFilter !== 'ALL') {
      result = result.filter((o) => o.status === this.selectedStatusFilter);
    }

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(
        (o) =>
          o.orderNo.toLowerCase().includes(q) ||
          (o.customer?.name || o.customerName || '').toLowerCase().includes(q)
      );
    }

    this.filteredOrders = result;
  }

  setStatusFilter(status: string): void {
    this.selectedStatusFilter = status;
    this.applyFilter();
  }

  // --- Order Details & BOM Drawer ---
  openOrderDetails(order: Order): void {
    this.selectedOrder = order;
    this.poSuccessMessage = '';
    this.loadOrderBom(order.id);
  }

  closeOrderDetails(): void {
    this.selectedOrder = null;
    this.bomRequirements = [];
  }

  loadOrderBom(orderId: number): void {
    this.isLoadingBom = true;
    this.orderService.getOrderBom(orderId).pipe(
      timeout(10000),
      finalize(() => {
        this.isLoadingBom = false;
        this.cdr.detectChanges();
      })
    ).subscribe({
      next: (reqs) => {
        this.bomRequirements = reqs || [];
        this.isLoadingBom = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.bomRequirements = [];
        this.isLoadingBom = false;
        this.cdr.detectChanges();
      }
    });
  }

  autoGeneratePurchaseOrders(): void {
    if (!this.selectedOrder) return;
    this.isGeneratingPO = true;
    this.poSuccessMessage = '';

    this.poService.generateForSalesOrder(this.selectedOrder.id).subscribe({
      next: (generated) => {
        this.isGeneratingPO = false;
        if (generated.length === 0) {
          this.poSuccessMessage = 'All required materials are already adequately in stock!';
        } else {
          this.poSuccessMessage = `Successfully created ${generated.length} Purchase Order(s) for material shortages!`;
          this.loadOrderBom(this.selectedOrder!.id);
        }
        this.cdr.detectChanges();
      },
      error: () => {
        this.isGeneratingPO = false;
        this.poSuccessMessage = 'Error generating Purchase Orders.';
        this.cdr.detectChanges();
      }
    });
  }

  // --- Invoice Modal ---
  openInvoiceModal(orderId: number): void {
    this.invoiceOrderId = orderId;
    this.invoiceDueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    this.invoiceTaxRate = 18.0;
    this.invoiceMessage = '';
    this.isInvoiceModalOpen = true;
  }

  closeInvoiceModal(): void {
    this.isInvoiceModalOpen = false;
    this.invoiceOrderId = null;
  }

  confirmGenerateInvoice(): void {
    if (!this.invoiceOrderId) return;
    this.invoiceService
      .createInvoice({
        orderId: this.invoiceOrderId,
        dueDate: this.invoiceDueDate,
        taxRatePercent: this.invoiceTaxRate
      })
      .subscribe({
        next: (inv) => {
          this.invoiceMessage = `Invoice ${inv.invoiceNo} generated successfully!`;
          setTimeout(() => {
            this.closeInvoiceModal();
            this.fetchOrders();
            if (this.selectedOrder && this.selectedOrder.id === this.invoiceOrderId) {
              this.selectedOrder.status = 'INVOICED';
            }
          }, 1200);
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.invoiceMessage = err?.error?.message || 'Invoice generation completed.';
          setTimeout(() => {
            this.closeInvoiceModal();
            this.fetchOrders();
          }, 1200);
          this.cdr.detectChanges();
        }
      });
  }

  // --- Create Order Modal ---
  openCreateModal(): void {
    this.orderForm.reset();
    this.itemsFormArray.clear();
    this.addItemRow();
    this.isCreateModalOpen = true;
  }

  closeCreateModal(): void {
    this.isCreateModalOpen = false;
  }

  addItemRow(): void {
    const itemGroup = this.fb.group({
      productId: [null as number | null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
    this.itemsFormArray.push(itemGroup);
  }

  removeItemRow(index: number): void {
    if (this.itemsFormArray.length > 1) {
      this.itemsFormArray.removeAt(index);
    }
  }

  calculateLiveTotal(): number {
    let total = 0;
    for (const ctrl of this.itemsFormArray.controls) {
      const pId = ctrl.get('productId')?.value;
      const qty = ctrl.get('quantity')?.value || 0;
      const prod = this.products.find((p) => p.id === Number(pId));
      if (prod) {
        total += prod.unitPrice * qty;
      }
    }
    return total;
  }

  getItemUnitPrice(productId: any): number {
    const prod = this.products.find((p) => p.id === Number(productId));
    return prod ? prod.unitPrice : 0;
  }

  onSubmitNewOrder(): void {
    if (this.orderForm.invalid) return;

    const val = this.orderForm.value;
    const items = (val.items || []).map((it: any) => ({
      productId: Number(it.productId),
      quantity: Number(it.quantity)
    }));

    this.orderService
      .createOrder({
        customerId: Number(val.customerId),
        items: items
      })
      .subscribe({
        next: () => {
          this.closeCreateModal();
          this.fetchOrders();
        },
        error: () => {
          this.closeCreateModal();
          this.fetchOrders();
        }
      });
  }
}


