import { Customer } from '../../shared/models/customer.model';
import { Supplier } from '../../shared/models/supplier.model';
import { Material } from '../../shared/models/material.model';
import { Product, BomItem } from '../../shared/models/product.model';
import { Order, MaterialRequirementResponse } from '../../shared/models/order.model';
import { PurchaseOrder, Invoice } from '../../shared/models/procurement-invoice.model';
import { UserResponse } from '../../shared/models/auth.model';

export const INITIAL_CUSTOMERS: Customer[] = [
  { id: 1, name: 'Precision Automation Ltd', email: 'procurement@precisionauto.com', phone: '+91 98201 44521', address: 'Plot 42, MIDC Industrial Area, Pune', createdAt: '2026-01-15T10:00:00' },
  { id: 2, name: 'Zenith Robotics Corp', email: 'orders@zenithrobotics.io', phone: '+91 98450 11234', address: 'Tech Park Zone B, Whitefield, Bangalore', createdAt: '2026-02-01T11:30:00' },
  { id: 3, name: 'Apex Industrial Dynamics', email: 'supply@apexdynamics.in', phone: '+91 97110 88920', address: 'Sector 18, Industrial Estate, Gurgaon', createdAt: '2026-02-20T09:15:00' },
  { id: 4, name: 'Titan Heavy Machinery', email: 'contact@titanheavy.com', phone: '+91 94220 55192', address: 'Sanand Industrial Corridor, Ahmedabad', createdAt: '2026-03-05T14:45:00' }
];

export const INITIAL_SUPPLIERS: Supplier[] = [
  { id: 1, name: 'Krupp Steel & Alloy Mills', email: 'sales@kruppalloys.com', phone: '+91 98110 54321', address: 'Steel Plant Complex, Jamshedpur' },
  { id: 2, name: 'Electra Magnetics & Coil Co.', email: 'orders@electracoils.com', phone: '+91 98220 67890', address: 'Electronics City Phase 2, Hosur' },
  { id: 3, name: 'DynoPolymer Plastics', email: 'info@dynopolymer.com', phone: '+91 98330 98765', address: 'Chemical Zone, Dahej, Gujarat' },
  { id: 4, name: 'Precision MicroFasteners Ltd', email: 'dispatch@microfasteners.co', phone: '+91 98440 12345', address: 'Ambattur Industrial Estate, Chennai' }
];

export const INITIAL_MATERIALS: Material[] = [
  { id: 1, code: 'MAT-STL-304', name: 'High-Tensile Stainless Steel Rod (12mm)', unit: 'kg', stockQty: 180.0, unitCost: 320.0, supplier: INITIAL_SUPPLIERS[0] },
  { id: 2, code: 'MAT-COP-AWG', name: 'Enameled Copper Winding Wire 24 AWG', unit: 'kg', stockQty: 45.0, unitCost: 850.0, supplier: INITIAL_SUPPLIERS[1] },
  { id: 3, code: 'MAT-PLAS-ABS', name: 'Industrial Grade ABS Resin Pellets', unit: 'kg', stockQty: 250.0, unitCost: 190.0, supplier: INITIAL_SUPPLIERS[2] },
  { id: 4, code: 'MAT-BRG-6202', name: 'Sealed Deep Groove Ball Bearings 6202ZZ', unit: 'pcs', stockQty: 32.0, unitCost: 145.0, supplier: INITIAL_SUPPLIERS[3] },
  { id: 5, code: 'MAT-ALU-6061', name: 'Extruded Aluminum Casing Tube 6061-T6', unit: 'meters', stockQty: 60.0, unitCost: 450.0, supplier: INITIAL_SUPPLIERS[0] },
  { id: 6, code: 'MAT-SEN-HALL', name: 'Brushless Hall Effect Sensor Module', unit: 'pcs', stockQty: 18.0, unitCost: 280.0, supplier: INITIAL_SUPPLIERS[1] }
];

export const INITIAL_PRODUCTS: Product[] = [
  { id: 1, sku: 'PROD-SRV-400W', name: 'High-Torque AC Servo Motor 400W', unitPrice: 12500.0 },
  { id: 2, sku: 'PROD-PGR-10X', name: 'Precision Planetary Gearbox 10:1 Ratio', unitPrice: 8900.0 },
  { id: 3, sku: 'PROD-CNV-DRV', name: 'Automated Conveyor Drive Drum Roller', unitPrice: 15400.0 }
];

export const INITIAL_BOMS: Record<number, BomItem[]> = {
  1: [
    { id: 1, material: INITIAL_MATERIALS[0], qtyPerUnit: 2.5 },   // Steel rod
    { id: 2, material: INITIAL_MATERIALS[1], qtyPerUnit: 1.8 },   // Copper wire
    { id: 3, material: INITIAL_MATERIALS[3], qtyPerUnit: 2.0 },   // Ball bearings
    { id: 4, material: INITIAL_MATERIALS[4], qtyPerUnit: 0.8 },   // Aluminum tube
    { id: 5, material: INITIAL_MATERIALS[5], qtyPerUnit: 1.0 }    // Hall sensor
  ],
  2: [
    { id: 6, material: INITIAL_MATERIALS[0], qtyPerUnit: 4.2 },   // Steel rod
    { id: 7, material: INITIAL_MATERIALS[3], qtyPerUnit: 4.0 },   // Ball bearings
    { id: 8, material: INITIAL_MATERIALS[4], qtyPerUnit: 1.2 }    // Aluminum tube
  ],
  3: [
    { id: 9, material: INITIAL_MATERIALS[0], qtyPerUnit: 5.0 },   // Steel rod
    { id: 10, material: INITIAL_MATERIALS[2], qtyPerUnit: 3.5 },  // ABS resin
    { id: 11, material: INITIAL_MATERIALS[3], qtyPerUnit: 2.0 },  // Ball bearings
    { id: 12, material: INITIAL_MATERIALS[4], qtyPerUnit: 2.0 }   // Aluminum tube
  ]
};

export const INITIAL_ORDERS: Order[] = [
  {
    id: 1,
    orderNo: 'SO-2026-1042',
    customer: INITIAL_CUSTOMERS[0],
    customerName: 'Precision Automation Ltd',
    orderDate: '2026-03-24',
    status: 'CONFIRMED',
    totalAmount: 125000.0,
    items: [
      { id: 1, product: INITIAL_PRODUCTS[0], productId: 1, quantity: 10, unitPrice: 12500.0, lineTotal: 125000.0 }
    ]
  },
  {
    id: 2,
    orderNo: 'SO-2026-1043',
    customer: INITIAL_CUSTOMERS[1],
    customerName: 'Zenith Robotics Corp',
    orderDate: '2026-03-26',
    status: 'IN_PRODUCTION',
    totalAmount: 89000.0,
    items: [
      { id: 2, product: INITIAL_PRODUCTS[1], productId: 2, quantity: 10, unitPrice: 8900.0, lineTotal: 89000.0 }
    ]
  },
  {
    id: 3,
    orderNo: 'SO-2026-1044',
    customer: INITIAL_CUSTOMERS[2],
    customerName: 'Apex Industrial Dynamics',
    orderDate: '2026-03-28',
    status: 'INVOICED',
    totalAmount: 77000.0,
    items: [
      { id: 3, product: INITIAL_PRODUCTS[2], productId: 3, quantity: 5, unitPrice: 15400.0, lineTotal: 77000.0 }
    ]
  }
];

export const INITIAL_PURCHASE_ORDERS: PurchaseOrder[] = [
  {
    id: 1,
    poNo: 'PO-2026-8021',
    supplier: INITIAL_SUPPLIERS[1],
    salesOrder: INITIAL_ORDERS[0],
    poDate: '2026-03-25',
    status: 'RECEIVED',
    totalAmount: 42500.0,
    items: [
      { id: 1, material: INITIAL_MATERIALS[1], quantity: 50.0, unitCost: 850.0, lineTotal: 42500.0 }
    ]
  },
  {
    id: 2,
    poNo: 'PO-2026-8022',
    supplier: INITIAL_SUPPLIERS[3],
    salesOrder: INITIAL_ORDERS[0],
    poDate: '2026-03-25',
    status: 'DRAFT',
    totalAmount: 8700.0,
    items: [
      { id: 2, material: INITIAL_MATERIALS[3], quantity: 60.0, unitCost: 145.0, lineTotal: 8700.0 }
    ]
  }
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 1,
    invoiceNo: 'INV-2026-5012',
    salesOrder: INITIAL_ORDERS[2],
    invoiceDate: '2026-03-28',
    dueDate: '2026-04-27',
    subtotal: 77000.0,
    taxAmount: 13860.0,
    totalAmount: 90860.0,
    status: 'PARTIAL',
    payments: [
      {
        id: 1,
        amount: 40000.0,
        paymentDate: '2026-03-29',
        method: 'BANK_TRANSFER',
        referenceNo: 'NEFT-AXIS-992104'
      }
    ]
  }
];

export const INITIAL_USERS: UserResponse[] = [
  { id: 1, username: 'admin', role: 'ADMIN', enabled: true },
  { id: 2, username: 'rahul.sales', role: 'SALES', enabled: true },
  { id: 3, username: 'anita.purchase', role: 'PURCHASE', enabled: true },
  { id: 4, username: 'vikram.accounts', role: 'ACCOUNTS', enabled: true }
];
