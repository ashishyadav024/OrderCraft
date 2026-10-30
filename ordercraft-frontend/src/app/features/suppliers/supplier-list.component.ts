import { Component, OnInit, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { timeout, finalize } from 'rxjs';
import { Navbar } from '../../shared/components/navbar/navbar';
import { SupplierService } from '../../core/services/supplier.service';
import { Supplier } from '../../shared/models/supplier.model';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    Navbar
  ],
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  private supplierService = inject(SupplierService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  suppliers: Supplier[] = [];
  filteredSuppliers: Supplier[] = [];

  displayedColumns: string[] = ['name', 'contact', 'address', 'actions'];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';

  isModalOpen = false;
  editingSupplier: Supplier | null = null;
  supplierForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  });

  ngOnInit(): void {
    this.fetchSuppliers();
  }

  fetchSuppliers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.supplierService.getAll().pipe(
      timeout(10000),
      finalize(() => { this.ngZone.run(() => { this.isLoading = false; this.cdr.detectChanges(); }); })
    ).subscribe({
      next: (data) => {
        this.ngZone.run(() => { this.suppliers = data || []; this.applyFilter(); this.isLoading = false; this.cdr.detectChanges(); });
      },
      error: () => {
        this.ngZone.run(() => { this.errorMessage = 'Failed to load suppliers. Check backend connection.'; this.isLoading = false; this.cdr.detectChanges(); });
      }
    });
  }

  applyFilter(): void {
    if (!this.searchTerm.trim()) {
      this.filteredSuppliers = [...this.suppliers];
      return;
    }
    const q = this.searchTerm.toLowerCase();
    this.filteredSuppliers = this.suppliers.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        (s.email && s.email.toLowerCase().includes(q)) ||
        (s.address && s.address.toLowerCase().includes(q))
    );
  }

  openCreateModal(): void {
    this.editingSupplier = null;
    this.supplierForm.reset();
    this.isModalOpen = true;
  }

  openEditModal(supplier: Supplier): void {
    this.editingSupplier = supplier;
    this.supplierForm.patchValue({
      name: supplier.name,
      email: supplier.email,
      phone: supplier.phone,
      address: supplier.address
    });
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.editingSupplier = null;
  }

  saveSupplier(): void {
    if (this.supplierForm.invalid) return;
    const val = this.supplierForm.value;

    const payload: Supplier = {
      name: val.name || '',
      email: val.email || '',
      phone: val.phone || '',
      address: val.address || ''
    };

    if (this.editingSupplier?.id) {
      this.supplierService.update(this.editingSupplier.id, payload).subscribe(() => {
        this.closeModal();
        this.fetchSuppliers();
      });
    } else {
      this.supplierService.create(payload).subscribe(() => {
        this.closeModal();
        this.fetchSuppliers();
      });
    }
  }

  deleteSupplier(id: number): void {
    if (confirm('Are you sure you want to delete this supplier partner?')) {
      this.supplierService.delete(id).subscribe(() => {
        this.fetchSuppliers();
      });
    }
  }
}

