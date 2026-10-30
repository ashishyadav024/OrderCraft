import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { timeout, finalize } from 'rxjs';
import { Navbar } from '../../shared/components/navbar/navbar';
import { InvoiceService } from '../../core/services/invoice.service';
import { Invoice, Payment } from '../../shared/models/procurement-invoice.model';

@Component({
  selector: 'app-invoice-list',
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
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  private invoiceService = inject(InvoiceService);
  private fb = inject(FormBuilder);

  invoices: Invoice[] = [];
  filteredInvoices: Invoice[] = [];

  displayedColumns: string[] = ['invoiceNo', 'customer', 'orderNo', 'status', 'totalAmount', 'balance', 'dueDate', 'actions'];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';
  statusFilter = 'ALL';

  // Invoice Printable View Drawer
  selectedInvoice: Invoice | null = null;

  // Record Payment Modal
  isPaymentModalOpen = false;
  paymentInvoice: Invoice | null = null;
  paymentError = '';
  paymentSuccess = '';
  paymentForm = this.fb.group({
    amount: [0, [Validators.required, Validators.min(0.01)]],
    method: ['BANK_TRANSFER', Validators.required],
    referenceNo: ['', Validators.required]
  });

  ngOnInit(): void {
    this.fetchInvoices();
  }

  fetchInvoices(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.invoiceService.getAll().pipe(
      timeout(10000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (data) => {
        this.invoices = data || [];
        this.applyFilter();
      },
      error: () => {
        this.errorMessage = 'Failed to load invoices. Check backend connection.';
      }
    });
  }

  applyFilter(): void {
    let result = [...this.invoices];

    if (this.statusFilter !== 'ALL') {
      result = result.filter((i) => i.status === this.statusFilter);
    }

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(
        (i) =>
          i.invoiceNo.toLowerCase().includes(q) ||
          (i.salesOrder?.orderNo || '').toLowerCase().includes(q) ||
          (i.salesOrder?.customer?.name || '').toLowerCase().includes(q)
      );
    }

    this.filteredInvoices = result;
  }

  setStatusFilter(status: string): void {
    this.statusFilter = status;
    this.applyFilter();
  }

  // Calculations
  getTotalPaid(invoice: Invoice): number {
    return (invoice.payments || []).reduce((sum, p) => sum + p.amount, 0);
  }

  getRemainingBalance(invoice: Invoice): number {
    const paid = this.getTotalPaid(invoice);
    return Math.max(0, Number((invoice.totalAmount - paid).toFixed(2)));
  }

  getPaidPercentage(invoice: Invoice): number {
    if (invoice.totalAmount <= 0) return 0;
    const pct = (this.getTotalPaid(invoice) / invoice.totalAmount) * 100;
    return Math.min(100, Math.round(pct));
  }

  // Details
  openInvoiceDetails(inv: Invoice): void {
    this.selectedInvoice = inv;
  }

  closeInvoiceDetails(): void {
    this.selectedInvoice = null;
  }

  printInvoice(): void {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }

  // Payment Modal
  openPaymentModal(inv: Invoice): void {
    this.paymentInvoice = inv;
    const balance = this.getRemainingBalance(inv);
    this.paymentError = '';
    this.paymentSuccess = '';
    this.paymentForm.reset({
      amount: balance,
      method: 'BANK_TRANSFER',
      referenceNo: `TXN-${new Date().getFullYear()}-${Math.floor(Math.random() * 899999 + 100000)}`
    });
    this.isPaymentModalOpen = true;
  }

  closePaymentModal(): void {
    this.isPaymentModalOpen = false;
    this.paymentInvoice = null;
  }

  fillFullBalance(): void {
    if (!this.paymentInvoice) return;
    this.paymentForm.patchValue({
      amount: this.getRemainingBalance(this.paymentInvoice)
    });
  }

  submitPayment(): void {
    if (this.paymentForm.invalid || !this.paymentInvoice?.id) return;
    const val = this.paymentForm.value;
    const amount = Number(val.amount);
    const balance = this.getRemainingBalance(this.paymentInvoice);

    if (amount > balance) {
      this.paymentError = `Payment amount (₹${amount}) cannot exceed outstanding balance (₹${balance}).`;
      return;
    }

    this.invoiceService
      .recordPayment(this.paymentInvoice.id, {
        amount: amount,
        method: val.method || 'BANK_TRANSFER',
        referenceNo: val.referenceNo || ''
      })
      .subscribe({
        next: (payment) => {
          this.paymentSuccess = `Payment of ₹${amount} recorded successfully!`;
          setTimeout(() => {
            this.closePaymentModal();
            this.fetchInvoices();
            if (this.selectedInvoice && this.selectedInvoice.id === this.paymentInvoice?.id) {
              this.selectedInvoice.payments = this.selectedInvoice.payments || [];
              this.selectedInvoice.payments.push(payment);
            }
          }, 1000);
        },
        error: (err) => {
          this.paymentError = err?.error?.message || 'Error recording payment.';
        }
      });
  }
}
