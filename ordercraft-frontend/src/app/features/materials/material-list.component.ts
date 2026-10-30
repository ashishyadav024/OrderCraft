import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { timeout, finalize } from 'rxjs';
import { Navbar } from '../../shared/components/navbar/navbar';
import { MaterialService } from '../../core/services/material.service';
import { SupplierService } from '../../core/services/supplier.service';
import { Material } from '../../shared/models/material.model';
import { Supplier } from '../../shared/models/supplier.model';

@Component({
  selector: 'app-material-list',
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    Navbar
  ],
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  private materialService = inject(MaterialService);
  private supplierService = inject(SupplierService);
  private fb = inject(FormBuilder);

  materials: Material[] = [];
  filteredMaterials: Material[] = [];
  suppliers: Supplier[] = [];

  displayedColumns: string[] = ['code', 'name', 'stock', 'unitCost', 'valuation', 'supplier', 'actions'];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';
  stockFilter = 'ALL';

  // Modal State
  isModalOpen = false;
  editingMaterial: Material | null = null;
  materialForm = this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    unit: ['kg', Validators.required],
    stockQty: [0, [Validators.required, Validators.min(0)]],
    unitCost: [0, [Validators.required, Validators.min(0)]],
    supplierId: [null as number | null]
  });

  ngOnInit(): void {
    this.fetchMaterials();
    this.supplierService.getAll().subscribe((s) => (this.suppliers = s));
  }

  fetchMaterials(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.materialService.getAll().pipe(
      timeout(10000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (data) => {
        this.materials = data || [];
        this.applyFilter();
      },
      error: () => {
        this.errorMessage = 'Failed to load materials inventory. Check backend connection.';
      }
    });
  }

  applyFilter(): void {
    let result = [...this.materials];

    if (this.stockFilter === 'LOW') {
      result = result.filter((m) => m.stockQty < 50);
    } else if (this.stockFilter === 'NORMAL') {
      result = result.filter((m) => m.stockQty >= 50);
    }

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.code.toLowerCase().includes(q) ||
          (m.supplier?.name || '').toLowerCase().includes(q)
      );
    }

    this.filteredMaterials = result;
  }

  setStockFilter(filter: string): void {
    this.stockFilter = filter;
    this.applyFilter();
  }

  openCreateModal(): void {
    this.editingMaterial = null;
    this.materialForm.reset({
      code: '',
      name: '',
      unit: 'kg',
      stockQty: 0,
      unitCost: 0,
      supplierId: null
    });
    this.isModalOpen = true;
  }

  openEditModal(mat: Material): void {
    this.editingMaterial = mat;
    this.materialForm.patchValue({
      code: mat.code,
      name: mat.name,
      unit: mat.unit,
      stockQty: mat.stockQty,
      unitCost: mat.unitCost,
      supplierId: mat.supplier?.id || null
    });
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.editingMaterial = null;
  }

  saveMaterial(): void {
    if (this.materialForm.invalid) return;
    const val = this.materialForm.value;

    const supp = this.suppliers.find((s) => s.id === Number(val.supplierId));

    const payload: Partial<Material> = {
      code: val.code || '',
      name: val.name || '',
      unit: val.unit || 'pcs',
      stockQty: Number(val.stockQty || 0),
      unitCost: Number(val.unitCost || 0),
      supplier: supp || undefined
    };

    if (this.editingMaterial?.id) {
      this.materialService.update(this.editingMaterial.id, payload).subscribe(() => {
        this.closeModal();
        this.fetchMaterials();
      });
    } else {
      this.materialService.create(payload).subscribe(() => {
        this.closeModal();
        this.fetchMaterials();
      });
    }
  }

  deleteMaterial(id: number): void {
    if (confirm('Are you sure you want to delete this raw material item?')) {
      this.materialService.delete(id).subscribe(() => {
        this.fetchMaterials();
      });
    }
  }

  getTotalInventoryValuation(): number {
    return this.materials.reduce((acc, m) => acc + (m.stockQty * m.unitCost), 0);
  }

  getLowStockCount(): number {
    return this.materials.filter((m) => m.stockQty < 50).length;
  }
}
