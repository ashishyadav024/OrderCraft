import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Customer } from '../../shared/models/customer.model';
import { INITIAL_CUSTOMERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private http = inject(HttpClient);
  private readonly API_URL = '/api/customers';

  // In-memory cache & fallback
  private customers: Customer[] = [...INITIAL_CUSTOMERS];

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL).pipe(
      tap((data) => { if (data && data.length) this.customers = [...data]; }),
      catchError(() => of(this.customers))
    );
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.customers.find((c) => c.id === id);
        return of(found || this.customers[0]);
      })
    );
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer).pipe(
      tap((created) => this.customers.unshift(created)),
      catchError(() => {
        const newCustomer: Customer = {
          ...customer,
          id: Math.max(...this.customers.map((c) => c.id || 0), 0) + 1,
          createdAt: new Date().toISOString()
        };
        this.customers.unshift(newCustomer);
        return of(newCustomer);
      })
    );
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.API_URL}/${id}`, customer).pipe(
      tap((updated) => {
        const idx = this.customers.findIndex((c) => c.id === id);
        if (idx !== -1) this.customers[idx] = updated;
      }),
      catchError(() => {
        const idx = this.customers.findIndex((c) => c.id === id);
        if (idx !== -1) {
          this.customers[idx] = { ...customer, id };
        }
        return of({ ...customer, id });
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.customers = this.customers.filter((c) => c.id !== id);
      }),
      catchError(() => {
        this.customers = this.customers.filter((c) => c.id !== id);
        return of(undefined as void);
      })
    );
  }
}
