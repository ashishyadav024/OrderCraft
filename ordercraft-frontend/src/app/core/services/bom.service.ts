import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BomItem, BomItemRequest } from '../../shared/models/product.model';
import { MaterialService } from './material.service';
import { INITIAL_BOMS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class BomService {
  private http = inject(HttpClient);
  private materialService = inject(MaterialService);

  private bomsMap: Record<number, BomItem[]> = { ...INITIAL_BOMS };

  getBomByProduct(productId: number): Observable<BomItem[]> {
    return this.http.get<BomItem[]>(`/api/products/${productId}/bom`).pipe(
      tap((data) => {
        if (data) this.bomsMap[productId] = [...data];
      }),
      catchError(() => {
        return of(this.bomsMap[productId] || []);
      })
    );
  }

  addMaterialToBom(productId: number, request: BomItemRequest): Observable<BomItem> {
    return this.http.post<BomItem>(`/api/products/${productId}/bom`, request).pipe(
      tap((created) => {
        if (!this.bomsMap[productId]) this.bomsMap[productId] = [];
        this.bomsMap[productId].push(created);
      }),
      catchError(() => {
        if (!this.bomsMap[productId]) this.bomsMap[productId] = [];
        let mat = null;
        this.materialService.getById(request.materialId).subscribe((m) => (mat = m));
        const newItem: BomItem = {
          id: Math.floor(Math.random() * 10000) + 100,
          material: mat || {
            id: request.materialId,
            code: 'MAT-GEN',
            name: 'Component Material',
            unit: 'pcs',
            stockQty: 50,
            unitCost: 100
          },
          qtyPerUnit: request.quantityRequired
        };
        this.bomsMap[productId].push(newItem);
        return of(newItem);
      })
    );
  }

  updateBomItemQuantity(productId: number, bomItemId: number, quantity: number): Observable<BomItem> {
    return this.http
      .put<BomItem>(`/api/products/${productId}/bom/${bomItemId}`, {
        materialId: 0,
        quantityRequired: quantity
      })
      .pipe(
        tap((updated) => {
          const list = this.bomsMap[productId] || [];
          const idx = list.findIndex((i) => i.id === bomItemId);
          if (idx !== -1) list[idx] = updated;
        }),
        catchError(() => {
          const list = this.bomsMap[productId] || [];
          const idx = list.findIndex((i) => i.id === bomItemId);
          if (idx !== -1) {
            list[idx] = { ...list[idx], qtyPerUnit: quantity };
            return of(list[idx]);
          }
          return of({ id: bomItemId, qtyPerUnit: quantity } as BomItem);
        })
      );
  }

  deleteBomItem(productId: number, bomItemId: number): Observable<void> {
    return this.http.delete<void>(`/api/products/${productId}/bom/${bomItemId}`).pipe(
      tap(() => {
        if (this.bomsMap[productId]) {
          this.bomsMap[productId] = this.bomsMap[productId].filter((i) => i.id !== bomItemId);
        }
      }),
      catchError(() => {
        if (this.bomsMap[productId]) {
          this.bomsMap[productId] = this.bomsMap[productId].filter((i) => i.id !== bomItemId);
        }
        return of(undefined as void);
      })
    );
  }
}
