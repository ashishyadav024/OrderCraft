export type OrderStatus =
  | 'CREATED'
  | 'CONFIRMED'
  | 'IN_PRODUCTION'
  | 'SHIPPED'
  | 'INVOICED'
  | 'PAID'
  | 'CANCELLED';

export interface OrderItem {
  id?: number;
  product?: { id?: number; sku?: string; name: string; unitPrice?: number };
  productId?: number;
  quantity: number;
  unitPrice: number;
  lineTotal?: number;
}

export interface Order {
  id: number;
  orderNo: string;
  customer?: { id?: number; name: string; email?: string; phone?: string; address?: string };
  customerName?: string;
  orderDate: string;
  status: OrderStatus;
  totalAmount: number;
  items?: OrderItem[];
}

export interface OrderItemRequest {
  productId: number;
  quantity: number;
}

export interface SalesOrderRequest {
  customerId: number;
  items: OrderItemRequest[];
}

export interface MaterialRequirementResponse {
  materialId: number;
  materialCode: string;
  materialName: string;
  unit: string;
  requiredQty: number;
  availableQty: number;
  shortageQty: number;
  supplierId?: number;
  supplierName?: string;
}