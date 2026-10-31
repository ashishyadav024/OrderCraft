import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { LoginComponent } from './login.component';
import { AuthService } from '../../core/services/auth.service';
import { LoginResponse } from '../../shared/models/auth.model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: {
    isLoggedIn: ReturnType<typeof vi.fn>;
    login: ReturnType<typeof vi.fn>;
    register: ReturnType<typeof vi.fn>;
  };
  let routerMock: { navigate: ReturnType<typeof vi.fn>; navigateByUrl: ReturnType<typeof vi.fn> };

  const mockLoginResponse: LoginResponse = {
    token: 'mock-jwt-token',
    username: 'admin',
    role: 'ADMIN'
  };

  beforeEach(async () => {
    authServiceMock = {
      isLoggedIn: vi.fn(),
      login: vi.fn(),
      register: vi.fn()
    };
    routerMock = {
      navigate: vi.fn(),
      navigateByUrl: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: {}
            }
          }
        }
      ]
    }).compileComponents();
  });

  function createComponent(): void {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }

  it('should create the component', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should redirect immediately to /dashboard if user is already logged in', () => {
    authServiceMock.isLoggedIn.mockReturnValue(true);
    createComponent();
    fixture.detectChanges();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should initialize loginForm with empty controls when not logged in', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('username')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
    expect(component.loginForm.valid).toBe(false);
  });

  it('should invalidate the form when fields are empty', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');

    expect(component.loginForm.valid).toBe(false);
  });

  it('should validate the form when fields are filled', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('password123');

    expect(component.loginForm.valid).toBe(true);
  });

  it('should handle successful login and redirect to default url', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(of(mockLoginResponse));
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('password123');
    component.onSubmit();

    expect(authServiceMock.login).toHaveBeenCalledWith({
      username: 'admin',
      password: 'password123'
    });
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/dashboard');
  });

  it('should show error banner when credentials are invalid (401)', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(
      throwError(() => ({ status: 401, error: { message: 'Invalid credentials' } }))
    );
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('wrong-password');
    component.onSubmit();

    expect(component.errorMessage).toBe('Invalid username or password.');
    expect(component.isLoading).toBe(false);
  });

  it('should show server unavailable error banner on network failure (status 0)', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(throwError(() => ({ status: 0 })));
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('Admin@123');
    component.onSubmit();

    expect(component.errorMessage).toBe('Server is currently unavailable. Please try again later.');
    expect(component.isLoading).toBe(false);
  });

  it('should toggle password visibility on click', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    expect(component.hidePassword).toBe(true);
    component.togglePasswordVisibility();
    expect(component.hidePassword).toBe(false);
    component.togglePasswordVisibility();
    expect(component.hidePassword).toBe(true);
  });

  it('should switch tabs between signin and signup without reloading', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    expect(component.activeTab).toBe('signin');
    component.setTab('signup');
    expect(component.activeTab).toBe('signup');
    component.setTab('signin');
    expect(component.activeTab).toBe('signin');
  });

  it('should reject signup form when passwords do not match', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    component.setTab('signup');
    component.signupForm.setValue({
      fullName: 'Test User',
      username: 'testuser',
      email: 'test@ordercraft.com',
      password: 'Password123',
      confirmPassword: 'MismatchPassword1',
      role: 'SALES'
    });
    component.onSignupSubmit();

    expect(component.isSignupFieldInvalid('confirmPassword')).toBe(true);
    expect(component.getSignupFieldError('confirmPassword')).toBe('Passwords do not match.');
    expect(authServiceMock.register).not.toHaveBeenCalled();
  });

  it('should enforce password pattern of at least 8 chars with letter and number', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    component.setTab('signup');
    // Only numbers
    component.signupForm.controls.password.setValue('12345678');
    expect(component.signupForm.controls.password.invalid).toBe(true);

    // Only letters
    component.signupForm.controls.password.setValue('abcdefgh');
    expect(component.signupForm.controls.password.invalid).toBe(true);

    // Letter and number, min 8 chars
    component.signupForm.controls.password.setValue('Secret123');
    expect(component.signupForm.controls.password.valid).toBe(true);
  });

  it('should successfully submit valid signup, show account created message, and switch to signin tab', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.register.mockReturnValue(of({
      id: 1,
      fullName: 'Rahul Verma',
      username: 'rahul.sales',
      email: 'rahul@ordercraft.com',
      role: 'SALES',
      message: 'Account created successfully'
    }));
    createComponent();
    fixture.detectChanges();

    component.setTab('signup');
    component.signupForm.setValue({
      fullName: 'Rahul Verma',
      username: 'rahul.sales',
      email: 'rahul@ordercraft.com',
      password: 'Password123',
      confirmPassword: 'Password123',
      role: 'SALES'
    });
    component.onSignupSubmit();

    expect(authServiceMock.register).toHaveBeenCalledWith({
      fullName: 'Rahul Verma',
      username: 'rahul.sales',
      email: 'rahul@ordercraft.com',
      password: 'Password123',
      role: 'SALES'
    });
    expect(component.successMessage).toContain('Account created');
    expect(component.activeTab).toBe('signin');
    expect(component.loginForm.get('username')?.value).toBe('rahul.sales');
  });

  it('should quickLogin in dev mode and submit form', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(of(mockLoginResponse));
    createComponent();
    fixture.detectChanges();

    component.quickLogin('admin', 'Admin@123');

    expect(component.loginForm.get('username')?.value).toBe('admin');
    expect(authServiceMock.login).toHaveBeenCalled();
  });
});
