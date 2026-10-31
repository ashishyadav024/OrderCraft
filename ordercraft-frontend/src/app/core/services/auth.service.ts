import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginRequest, LoginResponse, UserSession, RegisterRequest, RegisterResponse } from '../../shared/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = '/api/auth';
  private readonly TOKEN_KEY = 'ordercraft_token';
  private readonly USER_KEY = 'ordercraft_user';

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private http = inject(HttpClient);

  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  public authStatus$ = this.authStatusSubject.asObservable();

  private userSubject = new BehaviorSubject<UserSession | null>(this.getCurrentUser());
  public user$ = this.userSubject.asObservable();

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, credentials).pipe(
      tap((response: LoginResponse) => {
        this.setSession(response);
      })
    );
  }

  register(userData: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.API_URL}/register`, userData);
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
    this.authStatusSubject.next(false);
    this.userSubject.next(null);
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem(this.TOKEN_KEY) : null;
  }

  getUserRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  getUsername(): string | null {
    const user = this.getCurrentUser();
    return user ? user.username : null;
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  switchRole(newRole: string): void {
    const currentUser = this.getCurrentUser() || { username: 'demo.user', role: 'ADMIN' };
    const updatedUser: UserSession = {
      username: currentUser.username,
      role: newRole
    };
    if (this.isBrowser) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
      if (!this.getToken()) {
        localStorage.setItem(this.TOKEN_KEY, 'demo-token');
      }
    }
    this.userSubject.next(updatedUser);
    this.authStatusSubject.next(true);
  }

  private hasToken(): boolean {
    return this.isBrowser ? !!localStorage.getItem(this.TOKEN_KEY) : false;
  }

  private getCurrentUser(): UserSession | null {
    if (!this.isBrowser) return null;
    const userJson = localStorage.getItem(this.USER_KEY);
    if (!userJson) return null;
    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
  }

  private setSession(authResult: LoginResponse): void {
    const userSession: UserSession = {
      username: authResult.username,
      role: authResult.role
    };
    if (this.isBrowser) {
      localStorage.setItem(this.TOKEN_KEY, authResult.token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(userSession));
    }
    this.userSubject.next(userSession);
    this.authStatusSubject.next(true);
  }
}