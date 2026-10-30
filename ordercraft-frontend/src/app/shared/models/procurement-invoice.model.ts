import { Supplier } from './supplier.model';
import { Material } from './material.model';
import { Order } from './order.model';

export interface PurchaseOrderItem {
  id?: number;
  material: Material;
  quantity: number;
  unitCost: number;
  lineTotal: number;
}

export interface PurchaseOrder {
  id?: number;
  poNo: string;
  supplier?: Supplier;
  salesOrder?: Order;
  poDate: string;
  status: 'DRAFT' | 'SENT' | 'RECEIVED' | 'CANCELLED';
  totalAmount: number;
  items?: PurchaseOrderItem[];
}

export interface PurchaseItemRequest {
  materialId: number;
  quantity: number;
}

export interface PurchaseOrderRequest {
  supplierId: number;
  orderId?: number;
  items: PurchaseItemRequest[];
}

export interface Payment {
  id?: number;
  amount: number;
  paymentDate: string;
  method: 'CASH' | 'CARD' | 'UPI' | 'BANK_TRANSFER' | string;
  referenceNo?: string;
}

export interface Invoice {
  id?: number;
  invoiceNo: string;
  salesOrder?: Order;
  invoiceDate: string;
  dueDate: string;
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  status: 'UNPAID' | 'PARTIAL' | 'PAID';
  payments?: Payment[];
}

export interface InvoiceCreateRequest {
  orderId: number;
  dueDate?: string;
  taxRatePercent?: number;
}

export interface PaymentRequest {
  amount: number;
  method: string;
  referenceNo?: string;
}