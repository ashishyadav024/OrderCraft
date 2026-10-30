import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Supplier } from '../../shared/models/supplier.model';
import { INITIAL_SUPPLIERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private http = inject(HttpClient);
  private readonly API_URL = '/api/suppliers';

  private suppliers: Supplier[] = [...INITIAL_SUPPLIERS];

  getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.API_URL).pipe(
      tap((data) => { if (data && data.length) this.suppliers = [...data]; }),
      catchError(() => of(this.suppliers))
    );
  }

  getById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.suppliers.find((s) => s.id === id);
        return of(found || this.suppliers[0]);
      })
    );
  }

  create(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.API_URL, supplier).pipe(
      tap((created) => this.suppliers.unshift(created)),
      catchError(() => {
        const newSupplier: Supplier = {
          ...supplier,
          id: Math.max(...this.suppliers.map((s) => s.id || 0), 0) + 1
        };
        this.suppliers.unshift(newSupplier);
        return of(newSupplier);
      })
    );
  }

  update(id: number, supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.API_URL}/${id}`, supplier).pipe(
      tap((updated) => {
        const idx = this.suppliers.findIndex((s) => s.id === id);
        if (idx !== -1) this.suppliers[idx] = updated;
      }),
      catchError(() => {
        const idx = this.suppliers.findIndex((s) => s.id === id);
        if (idx !== -1) {
          this.suppliers[idx] = { ...supplier, id };
        }
        return of({ ...supplier, id });
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.suppliers = this.suppliers.filter((s) => s.id !== id);
      }),
      catchError(() => {
        this.suppliers = this.suppliers.filter((s) => s.id !== id);
        return of(undefined as void);
      })
    );
  }
}
