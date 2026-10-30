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
import { CustomerService } from '../../core/services/customer.service';
import { Customer } from '../../shared/models/customer.model';

@Component({
  selector: 'app-customer-list',
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
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private customerService = inject(CustomerService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];

  displayedColumns: string[] = ['name', 'contact', 'address', 'actions'];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';

  isModalOpen = false;
  editingCustomer: Customer | null = null;
  customerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  });

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.customerService.getAll().pipe(
      timeout(10000),
      finalize(() => { this.ngZone.run(() => { this.isLoading = false; this.cdr.detectChanges(); }); })
    ).subscribe({
      next: (data) => {
        this.ngZone.run(() => { this.customers = data || []; this.applyFilter(); this.isLoading = false; this.cdr.detectChanges(); });
      },
      error: () => {
        this.ngZone.run(() => { this.errorMessage = 'Failed to load customers. Check backend connection.'; this.isLoading = false; this.cdr.detectChanges(); });
      }
    });
  }

  applyFilter(): void {
    if (!this.searchTerm.trim()) {
      this.filteredCustomers = [...this.customers];
      return;
    }
    const q = this.searchTerm.toLowerCase();
    this.filteredCustomers = this.customers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.email && c.email.toLowerCase().includes(q)) ||
        (c.address && c.address.toLowerCase().includes(q))
    );
  }

  openCreateModal(): void {
    this.editingCustomer = null;
    this.customerForm.reset();
    this.isModalOpen = true;
  }

  openEditModal(customer: Customer): void {
    this.editingCustomer = customer;
    this.customerForm.patchValue({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address
    });
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.editingCustomer = null;
  }

  saveCustomer(): void {
    if (this.customerForm.invalid) return;
    const val = this.customerForm.value;

    const payload: Customer = {
      name: val.name || '',
      email: val.email || '',
      phone: val.phone || '',
      address: val.address || ''
    };

    if (this.editingCustomer?.id) {
      this.customerService.update(this.editingCustomer.id, payload).subscribe(() => {
        this.closeModal();
        this.fetchCustomers();
      });
    } else {
      this.customerService.create(payload).subscribe(() => {
        this.closeModal();
        this.fetchCustomers();
      });
    }
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer account?')) {
      this.customerService.delete(id).subscribe(() => {
        this.fetchCustomers();
      });
    }
  }
}

