import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Material } from '../../shared/models/material.model';
import { INITIAL_MATERIALS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private http = inject(HttpClient);
  private readonly API_URL = '/api/materials';

  private materials: Material[] = [...INITIAL_MATERIALS];

  getAll(): Observable<Material[]> {
    return this.http.get<Material[]>(this.API_URL).pipe(
      tap((data) => { if (data && data.length) this.materials = [...data]; }),
      catchError(() => of(this.materials))
    );
  }

  getById(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.API_URL}/${id}`).pipe(
      catchError(() => {
        const found = this.materials.find((m) => m.id === id);
        return of(found || this.materials[0]);
      })
    );
  }

  create(material: Partial<Material>): Observable<Material> {
    return this.http.post<Material>(this.API_URL, material).pipe(
      tap((created) => this.materials.unshift(created)),
      catchError(() => {
        const newMaterial: Material = {
          id: Math.max(...this.materials.map((m) => m.id || 0), 0) + 1,
          code: material.code || 'MAT-NEW',
          name: material.name || 'Unnamed Material',
          unit: material.unit || 'pcs',
          stockQty: material.stockQty ?? 0,
          unitCost: material.unitCost ?? 0,
          supplier: material.supplier
        };
        this.materials.unshift(newMaterial);
        return of(newMaterial);
      })
    );
  }

  update(id: number, material: Partial<Material>): Observable<Material> {
    return this.http.put<Material>(`${this.API_URL}/${id}`, material).pipe(
      tap((updated) => {
        const idx = this.materials.findIndex((m) => m.id === id);
        if (idx !== -1) this.materials[idx] = updated;
      }),
      catchError(() => {
        const idx = this.materials.findIndex((m) => m.id === id);
        if (idx !== -1) {
          this.materials[idx] = { ...this.materials[idx], ...material, id };
          return of(this.materials[idx]);
        }
        return of(material as Material);
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.materials = this.materials.filter((m) => m.id !== id);
      }),
      catchError(() => {
        this.materials = this.materials.filter((m) => m.id !== id);
        return of(undefined as void);
      })
    );
  }

  // Helper method to adjust local stock (e.g. after receiving a PO in demo mode)
  adjustStock(materialId: number, addedQty: number): void {
    const mat = this.materials.find((m) => m.id === materialId);
    if (mat) {
      mat.stockQty = Number((mat.stockQty + addedQty).toFixed(2));
    }
  }
}
