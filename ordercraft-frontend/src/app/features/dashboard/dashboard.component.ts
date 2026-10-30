import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { finalize, timeout } from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Navbar } from '../../shared/components/navbar/navbar';
import { DashboardService, DashboardMetrics } from '../../core/services/dashboard.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe,
    DatePipe,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    Navbar
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);
  private router = inject(Router);

  metrics: DashboardMetrics | null = null;
  isLoading = true;
  errorMessage: string | null = null;
  userRole = this.authService.getUserRole();
  username = this.authService.getUsername();

  ngOnInit(): void {
    this.loadMetrics();
  }

  loadMetrics(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.dashboardService.getMetrics().pipe(
      timeout(10000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (data) => {
        this.metrics = data;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Failed to load operational telemetry:', err);
        this.errorMessage = 'Unable to synchronize operational telemetry. Please check backend connection and retry.';
      }
    });
  }

  navigateToOrders(): void {
    this.router.navigate(['/orders']);
  }

  navigateToMaterials(): void {
    this.router.navigate(['/materials']);
  }

  navigateToProcurement(): void {
    this.router.navigate(['/purchase-orders']);
  }

  navigateToInvoices(): void {
    this.router.navigate(['/invoices']);
  }
}
