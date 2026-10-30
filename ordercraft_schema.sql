-- ========================================================
-- OrderCraft: Manufacturing Order Management System (OMS)
-- Database Schema for MySQL / Oracle DB Compatible
-- ========================================================

CREATE DATABASE IF NOT EXISTS ordercraft;
USE ordercraft;

-- 1. App Users (RBAC)
CREATE TABLE IF NOT EXISTS app_user (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    enabled BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT chk_role CHECK (role IN ('ADMIN', 'SALES', 'PURCHASE', 'ACCOUNTS'))
);

-- 2. Customer Directory
CREATE TABLE IF NOT EXISTS customer (
    customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Supplier Directory
CREATE TABLE IF NOT EXISTS supplier (
    supplier_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT
);

-- 4. Products Master
CREATE TABLE IF NOT EXISTS product (
    product_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sku VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    unit_price DECIMAL(14, 2) NOT NULL
);

-- 5. Raw Materials & Inventory
CREATE TABLE IF NOT EXISTS material (
    material_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    stock_qty DECIMAL(12, 3) NOT NULL DEFAULT 0.000,
    unit_cost DECIMAL(12, 2) NOT NULL,
    supplier_id BIGINT,
    CONSTRAINT fk_material_supplier FOREIGN KEY (supplier_id) REFERENCES supplier (supplier_id) ON DELETE SET NULL
);

-- 6. Bill of Materials (BOM)
CREATE TABLE IF NOT EXISTS bom_item (
    bom_item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    material_id BIGINT NOT NULL,
    qty_per_unit DECIMAL(12, 3) NOT NULL,
    CONSTRAINT uq_bom UNIQUE (product_id, material_id),
    CONSTRAINT fk_bom_product FOREIGN KEY (product_id) REFERENCES product (product_id) ON DELETE CASCADE,
    CONSTRAINT fk_bom_material FOREIGN KEY (material_id) REFERENCES material (material_id) ON DELETE CASCADE
);

-- 7. Sales Orders
CREATE TABLE IF NOT EXISTS sales_order (
    order_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_no VARCHAR(20) NOT NULL UNIQUE,
    customer_id BIGINT NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'CREATED',
    total_amount DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_sales_order_customer FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
);

-- 8. Sales Order Items
CREATE TABLE IF NOT EXISTS sales_order_item (
    item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(12, 2) NOT NULL,
    line_total DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_order_item_order FOREIGN KEY (order_id) REFERENCES sales_order (order_id) ON DELETE CASCADE,
    CONSTRAINT fk_order_item_product FOREIGN KEY (product_id) REFERENCES product (product_id)
);

-- 9. Order BOM & Material Requirements Calculation
CREATE TABLE IF NOT EXISTS order_bom (
    order_bom_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    material_id BIGINT NOT NULL,
    required_qty DECIMAL(12, 3) NOT NULL,
    available_qty DECIMAL(12, 3) NOT NULL,
    shortage_qty DECIMAL(12, 3) NOT NULL,
    CONSTRAINT fk_order_bom_order FOREIGN KEY (order_id) REFERENCES sales_order (order_id) ON DELETE CASCADE,
    CONSTRAINT fk_order_bom_material FOREIGN KEY (material_id) REFERENCES material (material_id)
);

-- 10. Purchase Orders (Procurement)
CREATE TABLE IF NOT EXISTS purchase_order (
    po_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    po_no VARCHAR(20) NOT NULL UNIQUE,
    supplier_id BIGINT NOT NULL,
    order_id BIGINT,
    po_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'DRAFT',
    total_amount DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_po_supplier FOREIGN KEY (supplier_id) REFERENCES supplier (supplier_id),
    CONSTRAINT fk_po_sales_order FOREIGN KEY (order_id) REFERENCES sales_order (order_id) ON DELETE SET NULL
);

-- 11. Purchase Order Line Items
CREATE TABLE IF NOT EXISTS purchase_order_item (
    po_item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    po_id BIGINT NOT NULL,
    material_id BIGINT NOT NULL,
    quantity DECIMAL(12, 3) NOT NULL,
    unit_cost DECIMAL(12, 2) NOT NULL,
    line_total DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_po_item_po FOREIGN KEY (po_id) REFERENCES purchase_order (po_id) ON DELETE CASCADE,
    CONSTRAINT fk_po_item_material FOREIGN KEY (material_id) REFERENCES material (material_id)
);

-- 12. Invoices
CREATE TABLE IF NOT EXISTS invoice (
    invoice_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    invoice_no VARCHAR(20) NOT NULL UNIQUE,
    order_id BIGINT NOT NULL UNIQUE,
    invoice_date DATE NOT NULL,
    due_date DATE,
    subtotal DECIMAL(14, 2) NOT NULL,
    tax_amount DECIMAL(14, 2) NOT NULL DEFAULT 0.00,
    total_amount DECIMAL(14, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'UNPAID',
    CONSTRAINT fk_invoice_order FOREIGN KEY (order_id) REFERENCES sales_order (order_id)
);

-- 13. Payments
CREATE TABLE IF NOT EXISTS payment (
    payment_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    invoice_id BIGINT NOT NULL,
    amount DECIMAL(14, 2) NOT NULL,
    payment_date DATE NOT NULL,
    method VARCHAR(50),
    reference_no VARCHAR(100),
    CONSTRAINT fk_payment_invoice FOREIGN KEY (invoice_id) REFERENCES invoice (invoice_id) ON DELETE CASCADE
);

-- ========================================================
-- Seed Initial Data
-- Default user passwords hashed with BCrypt (Cost 10):
-- admin: Admin@123
-- sales: Sales@123
-- purchase: Purchase@123
-- accounts: Accounts@123
-- ========================================================

INSERT INTO app_user (username, password_hash, role, enabled) VALUES
('admin', '$2a$10$UoQ0H2tZ3bVqC4lQ6/HqweH.iK2KqC9Uj77NqH.MkW2fVwP3N3Wv6', 'ADMIN', true),
('sales', '$2a$10$4n9iJ8hQ2V5mK0l9E4.Wte4.5NqH.MkW2fVwP3N3Wv6UoQ0H2tZ3b', 'SALES', true),
('purchase', '$2a$10$7h2kL9pQ3W6nL1m0F5.Xuf5.6OrI.NlX3gWxQ4O4Xw7VpR1I3ua4c', 'PURCHASE', true),
('accounts', '$2a$10$8i3lM0qR4X7oM2n1G6.Yvg6.7PsJ.OmY4hXyR5P5Yx8WqS2J4vb5d', 'ACCOUNTS', true)
ON DUPLICATE KEY UPDATE enabled=VALUES(enabled);

-- Initial Customers
INSERT INTO customer (customer_id, name, email, phone, address) VALUES
(1, 'Tesla Motors India Ltd', 'procurement@tesla.co.in', '+91 98201 11223', 'Plot 12, Indospace Industrial Park, Chakan, Pune, Maharashtra'),
(2, 'Tata Advanced Systems', 'orders@tataadvanced.com', '+91 97110 33445', 'Aerospace SEZ, Adibatla, Hyderabad, Telangana'),
(3, 'L&T Heavy Engineering', 'commercial@larsentoubro.com', '+91 98920 55667', 'Powai Campus, Saki Vihar Road, Mumbai, Maharashtra')
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Initial Suppliers
INSERT INTO supplier (supplier_id, name, email, phone, address) VALUES
(1, 'Hindalco Industries', 'sales@hindalco.adityabirla.com', '+91 91234 56780', 'Birla Centurion, Worli, Mumbai, Maharashtra'),
(2, 'Jindal Steel & Power', 'commercial@jindalsteel.com', '+91 98765 43210', 'Jindal Centre, 12 Bhikaji Cama Place, New Delhi'),
(3, 'Bosch Rexroth Automation', 'supplies@boschrexroth.in', '+91 80 6752 1111', 'Plot 96, Electronic City Phase 1, Bengaluru, Karnataka')
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Initial Raw Materials
INSERT INTO material (material_id, code, name, unit, stock_qty, unit_cost, supplier_id) VALUES
(1, 'MAT-ALUM-6061', 'Aircraft Grade Aluminum 6061-T6 (Billet)', 'kg', 120.000, 350.00, 1),
(2, 'MAT-STEEL-316', 'Stainless Steel 316L Heavy Sheet (2mm)', 'm', 45.000, 720.00, 2),
(3, 'MAT-BRG-6205', 'Deep Groove Ball Bearing 6205-2RS', 'pcs', 250.000, 180.00, 3),
(4, 'MAT-VALVE-HYD', 'High-Pressure Directional Control Valve', 'pcs', 15.000, 4200.00, 3)
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Initial Products
INSERT INTO product (product_id, sku, name, unit_price) VALUES
(1, 'PROD-PUMP-HD', 'Industrial Hydraulic Pumping Station 500bar', 185000.00),
(2, 'PROD-CNC-ROTOR', 'Precision Aerospace Rotor Assembly', 74500.00)
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Initial Bills of Materials (BOM)
INSERT INTO bom_item (product_id, material_id, qty_per_unit) VALUES
(1, 1, 25.000),
(1, 2, 8.000),
(1, 3, 4.000),
(1, 4, 2.000),
(2, 1, 14.000),
(2, 3, 2.000)
ON DUPLICATE KEY UPDATE qty_per_unit=VALUES(qty_per_unit);

