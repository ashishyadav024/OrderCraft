import { Component, OnInit, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { timeout } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  isLoading = false;
  errorMessage = '';
  hidePassword = true;
  returnUrl = '/dashboard';

  demoRoles = [
    { role: 'ADMIN', label: 'Administrator', user: 'admin', pass: 'Admin@123', icon: 'shield', color: '#6366f1' },
    { role: 'SALES', label: 'Sales Specialist', user: 'sales', pass: 'Sales@123', icon: 'storefront', color: '#0ea5e9' },
    { role: 'PURCHASE', label: 'Procurement Mgr', user: 'purchase', pass: 'Purchase@123', icon: 'shopping_cart', color: '#10b981' },
    { role: 'ACCOUNTS', label: 'Accounts Officer', user: 'accounts', pass: 'Accounts@123', icon: 'account_balance', color: '#f59e0b' }
  ];

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  quickLogin(user: string, pass: string): void {
    this.loginForm.setValue({
      username: user,
      password: pass
    });
    this.onSubmit();
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.loginForm.getRawValue()).pipe(
      timeout(5000)
    ).subscribe({
      next: () => {
        this.ngZone.run(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
          this.router.navigateByUrl(this.returnUrl);
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.isLoading = false;
          if (err.name === 'TimeoutError') {
            this.errorMessage = 'Login timed out. Please try again.';
          } else if (err.status === 401) {
            this.errorMessage = 'Invalid username or password.';
          } else if (err.status === 0) {
            this.errorMessage = 'Server is currently unavailable. Please try again later.';
          } else {
            this.errorMessage = 'Login failed. Please verify credentials.';
          }
          this.cdr.detectChanges();
        });
      }
    });
  }
}
