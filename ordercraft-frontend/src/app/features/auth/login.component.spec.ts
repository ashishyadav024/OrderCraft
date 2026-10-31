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
  let authServiceMock: { isLoggedIn: ReturnType<typeof vi.fn>; login: ReturnType<typeof vi.fn> };
  let routerMock: { navigate: ReturnType<typeof vi.fn>; navigateByUrl: ReturnType<typeof vi.fn> };

  const mockLoginResponse: LoginResponse = {
    token: 'mock-jwt-token',
    username: 'admin',
    role: 'ADMIN'
  };

  beforeEach(async () => {
    authServiceMock = {
      isLoggedIn: vi.fn(),
      login: vi.fn()
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

  it('should redirect immediately to /orders if user is already logged in', () => {
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
    component.loginForm.controls['password'].setValue('Admin@123');

    expect(component.loginForm.valid).toBe(true);
  });

  it('should not call authService.login if form is submitted while invalid', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');
    component.onSubmit();

    expect(authServiceMock.login).not.toHaveBeenCalled();
  });

  it('should call authService.login and navigate to returnUrl on successful login', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(of(mockLoginResponse));
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('Admin@123');
    component.onSubmit();

    expect(component.isLoading).toBe(false);
    expect(authServiceMock.login).toHaveBeenCalledWith({
      username: 'admin',
      password: 'Admin@123'
    });
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/dashboard');
  });

  it('should display invalid credentials message on 401 error', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(throwError(() => ({ status: 401 })));
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('wronguser');
    component.loginForm.controls['password'].setValue('wrongpass');
    component.onSubmit();

    expect(component.isLoading).toBe(false);
    expect(component.errorMessage).toBe('Invalid username or password.');
  });

  it('should display server connection error when backend is down (status 0)', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(throwError(() => ({ status: 0 })));
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('Admin@123');
    component.onSubmit();

    expect(component.isLoading).toBe(false);
    expect(component.errorMessage).toBe(
      'Server is currently unavailable. Please try again later.'
    );
  });

  it('should display generic error message on unexpected errors', () => {
    authServiceMock.isLoggedIn.mockReturnValue(false);
    authServiceMock.login.mockReturnValue(throwError(() => ({ status: 500 })));
    createComponent();
    fixture.detectChanges();

    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('Admin@123');
    component.onSubmit();

    expect(component.isLoading).toBe(false);
    expect(component.errorMessage).toBe('Login failed. Please verify credentials.');
  });
});