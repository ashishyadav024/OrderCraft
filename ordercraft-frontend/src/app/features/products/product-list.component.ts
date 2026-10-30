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
import { ProductService } from '../../core/services/product.service';
import { BomService } from '../../core/services/bom.service';
import { MaterialService } from '../../core/services/material.service';
import { Product, BomItem } from '../../shared/models/product.model';
import { Material } from '../../shared/models/material.model';

@Component({
  selector: 'app-product-list',
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
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private bomService = inject(BomService);
  private materialService = inject(MaterialService);
  private fb = inject(FormBuilder);

  products: Product[] = [];
  filteredProducts: Product[] = [];
  materials: Material[] = [];

  displayedColumns: string[] = ['sku', 'name', 'unitPrice', 'bomSummary', 'actions'];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';

  // BOM Modal / Drawer State
  selectedProductForBom: Product | null = null;
  bomItems: BomItem[] = [];
  isLoadingBom = false;

  // Add BOM Item Form
  newBomMaterialId: number | null = null;
  newBomQuantity: number = 1.0;
  bomErrorMessage = '';

  // Product Create/Edit Dialog
  isProductModalOpen = false;
  editingProduct: Product | null = null;
  productForm = this.fb.group({
    sku: ['', Validators.required],
    name: ['', Validators.required],
    unitPrice: [0, [Validators.required, Validators.min(0)]]
  });

  ngOnInit(): void {
    this.fetchProducts();
    this.materialService.getAll().subscribe((m) => (this.materials = m));
  }

  fetchProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.productService.getAll().pipe(
      timeout(10000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (data) => {
        this.products = data || [];
        this.applyFilter();
      },
      error: () => {
        this.errorMessage = 'Failed to load products. Check backend connection.';
      }
    });
  }

  applyFilter(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = [...this.products];
      return;
    }
    const q = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
    );
  }

  // --- Product CRUD ---
  openCreateProductModal(): void {
    this.editingProduct = null;
    this.productForm.reset({ sku: '', name: '', unitPrice: 0 });
    this.isProductModalOpen = true;
  }

  openEditProductModal(product: Product): void {
    this.editingProduct = product;
    this.productForm.patchValue({
      sku: product.sku,
      name: product.name,
      unitPrice: product.unitPrice
    });
    this.isProductModalOpen = true;
  }

  closeProductModal(): void {
    this.isProductModalOpen = false;
    this.editingProduct = null;
  }

  saveProduct(): void {
    if (this.productForm.invalid) return;
    const formVal = this.productForm.value;

    const payload: Product = {
      sku: formVal.sku || '',
      name: formVal.name || '',
      unitPrice: Number(formVal.unitPrice || 0)
    };

    if (this.editingProduct?.id) {
      this.productService.update(this.editingProduct.id, payload).subscribe(() => {
        this.closeProductModal();
        this.fetchProducts();
      });
    } else {
      this.productService.create(payload).subscribe(() => {
        this.closeProductModal();
        this.fetchProducts();
      });
    }
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(id).subscribe(() => {
        this.fetchProducts();
      });
    }
  }

  // --- BOM Editor Modal ---
  openBomModal(product: Product): void {
    this.selectedProductForBom = product;
    this.bomErrorMessage = '';
    this.newBomMaterialId = null;
    this.newBomQuantity = 1.0;
    this.loadBom(product.id!);
  }

  closeBomModal(): void {
    this.selectedProductForBom = null;
    this.bomItems = [];
  }

  loadBom(productId: number): void {
    this.isLoadingBom = true;
    this.bomService.getBomByProduct(productId).pipe(
      timeout(10000),
      finalize(() => {
        this.isLoadingBom = false;
      })
    ).subscribe({
      next: (items) => {
        this.bomItems = items || [];
      },
      error: () => {
        this.bomItems = [];
      }
    });
  }

  addBomItem(): void {
    if (!this.selectedProductForBom?.id || !this.newBomMaterialId || this.newBomQuantity <= 0) {
      return;
    }

    this.bomErrorMessage = '';
    this.bomService
      .addMaterialToBom(this.selectedProductForBom.id, {
        materialId: Number(this.newBomMaterialId),
        quantityRequired: Number(this.newBomQuantity)
      })
      .subscribe({
        next: () => {
          this.newBomMaterialId = null;
          this.newBomQuantity = 1.0;
          this.loadBom(this.selectedProductForBom!.id!);
        },
        error: (err) => {
          this.bomErrorMessage =
            err?.error?.message || 'Material is already in this product BOM.';
        }
      });
  }

  removeBomItem(bomItemId: number): void {
    if (!this.selectedProductForBom?.id) return;
    this.bomService.deleteBomItem(this.selectedProductForBom.id, bomItemId).subscribe(() => {
      this.loadBom(this.selectedProductForBom!.id!);
    });
  }

  // Rollup calculations
  calculateBomCost(): number {
    return this.bomItems.reduce((acc, item) => {
      const unitCost = item.material?.unitCost || 0;
      return acc + unitCost * item.qtyPerUnit;
    }, 0);
  }

  calculateMargin(): number {
    if (!this.selectedProductForBom?.unitPrice) return 0;
    const cost = this.calculateBomCost();
    const price = this.selectedProductForBom.unitPrice;
    if (price <= 0) return 0;
    return Number((((price - cost) / price) * 100).toFixed(1));
  }
}
