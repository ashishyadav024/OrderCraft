import { Material } from './material.model';

export interface Product {
  id?: number;
  sku: string;
  name: string;
  unitPrice: number;
}

export interface BomItem {
  id?: number;
  product?: Product;
  material: Material;
  qtyPerUnit: number;
}

export interface BomItemRequest {
  materialId: number;
  quantityRequired: number;
}