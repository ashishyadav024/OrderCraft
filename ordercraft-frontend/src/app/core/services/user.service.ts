import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserResponse, UserRequest } from '../../shared/models/auth.model';
import { INITIAL_USERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private readonly API_URL = '/api/users';

  private users: UserResponse[] = [...INITIAL_USERS];

  getAll(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.API_URL).pipe(
      tap((data) => {
        if (data && data.length) this.users = [...data];
      }),
      catchError(() => of(this.users))
    );
  }

  create(request: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.API_URL, request).pipe(
      tap((created) => this.users.unshift(created)),
      catchError(() => {
        const newUser: UserResponse = {
          id: Math.max(...this.users.map((u) => u.id || 0), 0) + 1,
          username: request.username,
          role: request.role,
          enabled: true
        };
        this.users.unshift(newUser);
        return of(newUser);
      })
    );
  }

  setEnabled(id: number, enabled: boolean): Observable<UserResponse> {
    return this.http
      .patch<UserResponse>(`${this.API_URL}/${id}/enabled?value=${enabled}`, {})
      .pipe(
        tap((updated) => {
          const idx = this.users.findIndex((u) => u.id === id);
          if (idx !== -1) this.users[idx] = updated;
        }),
        catchError(() => {
          const u = this.users.find((user) => user.id === id);
          if (u) {
            u.enabled = enabled;
            return of({ ...u });
          }
          return of({ id, username: 'user', role: 'SALES', enabled });
        })
      );
  }
}
