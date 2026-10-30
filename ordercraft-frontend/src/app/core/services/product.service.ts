import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../../shared/models/product.model';
import { INITIAL_PRODUCTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private readonly API_URL = '/api/products';

  private products: Product[] = [...INITIAL_PRODUCTS];

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL).pipe(
      tap((data) => { if (data && data.length) this.products = [...data]; }),
      catchError(() => of(this.products))
    );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.products.find((p) => p.id === id);
        return of(found || this.products[0]);
      })
    );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product).pipe(
      tap((created) => this.products.unshift(created)),
      catchError(() => {
        const newProduct: Product = {
          ...product,
          id: Math.max(...this.products.map((p) => p.id || 0), 0) + 1
        };
        this.products.unshift(newProduct);
        return of(newProduct);
      })
    );
  }

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/${id}`, product).pipe(
      tap((updated) => {
        const idx = this.products.findIndex((p) => p.id === id);
        if (idx !== -1) this.products[idx] = updated;
      }),
      catchError(() => {
        const idx = this.products.findIndex((p) => p.id === id);
        if (idx !== -1) {
          this.products[idx] = { ...product, id };
        }
        return of({ ...product, id });
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.products = this.products.filter((p) => p.id !== id);
      }),
      catchError(() => {
        this.products = this.products.filter((p) => p.id !== id);
        return of(undefined as void);
      })
    );
  }
}
