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
import { environment } from '../../../environments/environment';

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

  activeTab: 'signin' | 'signup' = 'signin';
  isProduction = environment.production;

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  signupForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    role: ['SALES', Validators.required]
  });

  isLoading = false;
  errorMessage = '';
  successMessage = '';
  hidePassword = true;
  hideSignupPassword = true;
  hideSignupConfirmPassword = true;
  returnUrl = '/dashboard';

  demoRoles = [
    { role: 'ADMIN', label: 'Admin', user: 'admin', pass: 'Admin@123' },
    { role: 'SALES', label: 'Sales', user: 'sales', pass: 'Sales@123' },
    { role: 'PURCHASE', label: 'Purchase', user: 'purchase', pass: 'Purchase@123' },
    { role: 'ACCOUNTS', label: 'Accounts', user: 'accounts', pass: 'Accounts@123' }
  ];

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.returnUrl = this.route.snapshot?.queryParams?.['returnUrl'] || '/dashboard';
    if (
      this.route.snapshot?.queryParams?.['tab'] === 'signup' ||
      this.route.snapshot?.routeConfig?.path === 'register'
    ) {
      this.activeTab = 'signup';
    }
  }

  setTab(tab: 'signin' | 'signup'): void {
    this.activeTab = tab;
    this.errorMessage = '';
    this.successMessage = '';
  }

  quickLogin(user: string, pass: string): void {
    this.activeTab = 'signin';
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
    this.successMessage = '';

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

  onSignupSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    const val = this.signupForm.getRawValue();
    if (val.password !== val.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.register({
      username: val.username.trim(),
      password: val.password,
      role: val.role
    }).pipe(
      timeout(5000)
    ).subscribe({
      next: () => {
        this.ngZone.run(() => {
          this.isLoading = false;
          this.successMessage = 'Account created successfully. Please sign in.';
          this.loginForm.patchValue({ username: val.username.trim() });
          this.signupForm.reset({ role: 'SALES' });
          this.setTab('signin');
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.isLoading = false;
          if (err.status === 409) {
            this.errorMessage = 'Username already exists. Please choose a different username.';
          } else if (err.status === 404 || err.status === 405 || err.status === 403 || err.status === 401) {
            this.errorMessage = 'User registration is managed by administrators. Please contact your admin or sign in.';
          } else if (err.status === 0) {
            this.errorMessage = 'Server is currently unavailable. Please try again later.';
          } else {
            this.errorMessage = err?.error?.message || 'Registration failed. Please try again.';
          }
          this.cdr.detectChanges();
        });
      }
    });
  }
}
