import { Component, OnInit, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

export function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  if (!password || !confirmPassword) return null;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

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
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  // Password rule: min 8 characters with at least one letter and one number
  signupForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).+$/)
      ]
    ],
    confirmPassword: ['', [Validators.required]],
    role: ['SALES', [Validators.required]]
  }, { validators: passwordMatchValidator });

  isLoading = false;
  isSubmitted = false;
  isSignupSubmitted = false;
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

  signupRoles = [
    { value: 'SALES', label: 'Sales Specialist' },
    { value: 'PURCHASE', label: 'Procurement Manager' },
    { value: 'ACCOUNTS', label: 'Accounts Officer' }
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
    this.isSubmitted = false;
    this.isSignupSubmitted = false;
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleSignupPasswordVisibility(): void {
    this.hideSignupPassword = !this.hideSignupPassword;
  }

  toggleSignupConfirmPasswordVisibility(): void {
    this.hideSignupConfirmPassword = !this.hideSignupConfirmPassword;
  }

  isFieldInvalid(fieldName: 'username' | 'password'): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || field.dirty || this.isSubmitted));
  }

  isSignupFieldInvalid(fieldName: 'fullName' | 'username' | 'email' | 'password' | 'confirmPassword' | 'role'): boolean {
    const field = this.signupForm.get(fieldName);
    if (!field) return false;
    const isTouched = field.touched || field.dirty || this.isSignupSubmitted;
    if (fieldName === 'confirmPassword') {
      const isMismatch = this.signupForm.hasError('passwordMismatch') && isTouched;
      return (field.invalid || isMismatch) && isTouched;
    }
    return field.invalid && isTouched;
  }

  getSignupFieldError(fieldName: 'fullName' | 'username' | 'email' | 'password' | 'confirmPassword' | 'role'): string {
    const field = this.signupForm.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) {
      if (fieldName === 'fullName') return 'Full name is required.';
      if (fieldName === 'username') return 'Username is required.';
      if (fieldName === 'email') return 'Email address is required.';
      if (fieldName === 'password') return 'Password is required.';
      if (fieldName === 'confirmPassword') return 'Please confirm your password.';
      if (fieldName === 'role') return 'Please select a role.';
    }

    if (fieldName === 'fullName' && field.hasError('minlength')) {
      return 'Full name must be at least 2 characters.';
    }

    if (fieldName === 'username' && field.hasError('minlength')) {
      return 'Username must be at least 3 characters.';
    }

    if (fieldName === 'email' && field.hasError('email')) {
      return 'Please enter a valid email address.';
    }

    if (fieldName === 'password') {
      if (field.hasError('minlength') || field.hasError('pattern')) {
        return 'Password must be at least 8 characters with at least one letter and one number.';
      }
    }

    if (fieldName === 'confirmPassword' && this.signupForm.hasError('passwordMismatch')) {
      return 'Passwords do not match.';
    }

    return 'Please check this field.';
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
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.login(this.loginForm.getRawValue()).pipe(
      timeout(8000)
    ).subscribe({
      next: (response) => {
        this.ngZone.run(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
          const target = (this.returnUrl && this.returnUrl !== '/login' && this.returnUrl !== '/register')
            ? this.returnUrl
            : '/dashboard';
          this.router.navigateByUrl(target);
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
            this.errorMessage = err?.error?.message || 'Login failed. Please verify credentials.';
          }
          this.cdr.detectChanges();
        });
      }
    });
  }

  onSignupSubmit(): void {
    this.isSignupSubmitted = true;
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const val = this.signupForm.getRawValue();
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.register({
      fullName: (val.fullName || '').trim(),
      username: (val.username || '').trim(),
      email: (val.email || '').trim(),
      password: val.password || '',
      role: val.role || 'SALES'
    }).pipe(
      timeout(8000)
    ).subscribe({
      next: () => {
        this.ngZone.run(() => {
          this.isLoading = false;
          this.successMessage = 'Account created successfully. Please sign in with your credentials.';
          this.loginForm.patchValue({ username: (val.username || '').trim() });
          this.signupForm.reset({ role: 'SALES' });
          this.isSignupSubmitted = false;
          this.activeTab = 'signin';
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.isLoading = false;
          if (err.status === 409) {
            this.errorMessage = err?.error?.message || 'Username or email already exists. Please choose a different one.';
          } else if (err.status === 400) {
            this.errorMessage = err?.error?.message || 'Please check the form for invalid inputs.';
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
