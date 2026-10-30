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
import { PurchaseOrderService } from '../../core/services/purchase-order.service';
import { SupplierService } from '../../core/services/supplier.service';
import { MaterialService } from '../../core/services/material.service';
import { OrderService } from '../../core/services/order.service';
import { PurchaseOrder } from '../../shared/models/procurement-invoice.model';
import { Supplier } from '../../shared/models/supplier.model';
import { Material } from '../../shared/models/material.model';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'app-po-list',
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
  templateUrl: './po-list.component.html',
  styleUrls: ['./po-list.component.css']
})
export class PoListComponent implements OnInit {
  private poService = inject(PurchaseOrderService);
  private supplierService = inject(SupplierService);
  private materialService = inject(MaterialService);
  private orderService = inject(OrderService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  purchaseOrders: PurchaseOrder[] = [];
  filteredPOs: PurchaseOrder[] = [];
  suppliers: Supplier[] = [];
  materials: Material[] = [];
  salesOrders: Order[] = [];

  displayedColumns: string[] = ['poNo', 'supplier', 'linkedOrder', 'status', 'itemsCount', 'totalAmount', 'poDate', 'actions'];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';
  statusFilter = 'ALL';

  // Details Modal
  selectedPoForDetails: PurchaseOrder | null = null;

  // New PO Modal
  isCreateModalOpen = false;
  poForm = this.fb.group({
    supplierId: [null as number | null, Validators.required],
    orderId: [null as number | null],
    items: this.fb.array([])
  });

  get itemsFormArray(): FormArray {
    return this.poForm.get('items') as FormArray;
  }

  ngOnInit(): void {
    this.fetchPOs();
    this.supplierService.getAll().subscribe((s) => (this.suppliers = s));
    this.materialService.getAll().subscribe((m) => (this.materials = m));
    this.orderService.getOrders().subscribe((o) => (this.salesOrders = o));
  }

  fetchPOs(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.poService.getAll().pipe(
      timeout(10000),
      finalize(() => { this.ngZone.run(() => { this.isLoading = false; this.cdr.detectChanges(); }); })
    ).subscribe({
      next: (data) => {
        this.ngZone.run(() => { this.purchaseOrders = data || []; this.applyFilter(); this.isLoading = false; this.cdr.detectChanges(); });
      },
      error: () => {
        this.ngZone.run(() => { this.errorMessage = 'Failed to load purchase orders. Check backend connection.'; this.isLoading = false; this.cdr.detectChanges(); });
      }
    });
  }

  applyFilter(): void {
    let result = [...this.purchaseOrders];

    if (this.statusFilter !== 'ALL') {
      result = result.filter((p) => p.status === this.statusFilter);
    }

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.poNo.toLowerCase().includes(q) ||
          p.supplier?.name.toLowerCase().includes(q) ||
          (p.salesOrder?.orderNo || '').toLowerCase().includes(q)
      );
    }

    this.filteredPOs = result;
  }

  setStatusFilter(status: string): void {
    this.statusFilter = status;
    this.applyFilter();
  }

  // Receive Goods
  receiveGoods(po: PurchaseOrder): void {
    if (!po.id) return;
    if (confirm(`Confirm receipt of materials for ${po.poNo}? This will increment warehouse raw material stock.`)) {
      this.poService.receivePO(po.id).subscribe({
        next: (received) => {
          po.status = 'RECEIVED';
          this.fetchPOs();
          if (this.selectedPoForDetails && this.selectedPoForDetails.id === po.id) {
            this.selectedPoForDetails.status = 'RECEIVED';
          }
        }
      });
    }
  }

  openDetails(po: PurchaseOrder): void {
    this.selectedPoForDetails = po;
  }

  closeDetails(): void {
    this.selectedPoForDetails = null;
  }

  // Create Manual PO Modal
  openCreateModal(): void {
    this.poForm.reset();
    this.itemsFormArray.clear();
    this.addItemRow();
    this.isCreateModalOpen = true;
  }

  closeCreateModal(): void {
    this.isCreateModalOpen = false;
  }

  addItemRow(): void {
    const row = this.fb.group({
      materialId: [null as number | null, Validators.required],
      quantity: [10, [Validators.required, Validators.min(0.001)]]
    });
    this.itemsFormArray.push(row);
  }

  removeItemRow(index: number): void {
    if (this.itemsFormArray.length > 1) {
      this.itemsFormArray.removeAt(index);
    }
  }

  getMaterialUnitCost(materialId: any): number {
    const mat = this.materials.find((m) => m.id === Number(materialId));
    return mat ? mat.unitCost : 0;
  }

  calculateLiveTotal(): number {
    let total = 0;
    for (const ctrl of this.itemsFormArray.controls) {
      const mId = ctrl.get('materialId')?.value;
      const qty = ctrl.get('quantity')?.value || 0;
      const mat = this.materials.find((m) => m.id === Number(mId));
      if (mat) {
        total += mat.unitCost * qty;
      }
    }
    return total;
  }

  onSubmitNewPO(): void {
    if (this.poForm.invalid) return;
    const val = this.poForm.value;

    const items = (val.items || []).map((it: any) => ({
      materialId: Number(it.materialId),
      quantity: Number(it.quantity)
    }));

    this.poService
      .createManualPO({
        supplierId: Number(val.supplierId),
        orderId: val.orderId ? Number(val.orderId) : undefined,
        items: items
      })
      .subscribe(() => {
        this.closeCreateModal();
        this.fetchPOs();
      });
  }
}


