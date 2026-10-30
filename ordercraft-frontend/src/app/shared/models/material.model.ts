import { Supplier } from './supplier.model';

export interface Material {
  id?: number;
  code: string;
  name: string;
  unit: string;
  stockQty: number;
  unitCost: number;
  supplier?: Supplier;
}