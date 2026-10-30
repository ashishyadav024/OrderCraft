-- ========================================================
-- OrderCraft: Manufacturing Order Management System (OMS)
-- Database Schema for Spring Boot / MySQL / Oracle
-- ========================================================

CREATE TABLE IF NOT EXISTS app_user (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    enabled BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS customer (
    customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS supplier (
    supplier_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT
);

CREATE TABLE IF NOT EXISTS product (
    product_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sku VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    unit_price DECIMAL(14, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS material (
    material_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    stock_qty DECIMAL(12, 3) NOT NULL DEFAULT 0.000,
    unit_cost DECIMAL(12, 2) NOT NULL,
    supplier_id BIGINT,
    CONSTRAINT fk_mat_supplier FOREIGN KEY (supplier_id) REFERENCES supplier (supplier_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS bom_item (
    bom_item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    material_id BIGINT NOT NULL,
    qty_per_unit DECIMAL(12, 3) NOT NULL,
    CONSTRAINT uq_bom UNIQUE (product_id, material_id),
    CONSTRAINT fk_bom_prod FOREIGN KEY (product_id) REFERENCES product (product_id) ON DELETE CASCADE,
    CONSTRAINT fk_bom_mat FOREIGN KEY (material_id) REFERENCES material (material_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sales_order (
    order_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_no VARCHAR(20) NOT NULL UNIQUE,
    customer_id BIGINT NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'CREATED',
    total_amount DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_so_cust FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
);

CREATE TABLE IF NOT EXISTS sales_order_item (
    item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(12, 2) NOT NULL,
    line_total DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_so_item_order FOREIGN KEY (order_id) REFERENCES sales_order (order_id) ON DELETE CASCADE,
    CONSTRAINT fk_so_item_prod FOREIGN KEY (product_id) REFERENCES product (product_id)
);

CREATE TABLE IF NOT EXISTS order_bom (
    order_bom_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    material_id BIGINT NOT NULL,
    required_qty DECIMAL(12, 3) NOT NULL,
    available_qty DECIMAL(12, 3) NOT NULL,
    shortage_qty DECIMAL(12, 3) NOT NULL,
    CONSTRAINT fk_ob_order FOREIGN KEY (order_id) REFERENCES sales_order (order_id) ON DELETE CASCADE,
    CONSTRAINT fk_ob_material FOREIGN KEY (material_id) REFERENCES material (material_id)
);

CREATE TABLE IF NOT EXISTS purchase_order (
    po_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    po_no VARCHAR(20) NOT NULL UNIQUE,
    supplier_id BIGINT NOT NULL,
    order_id BIGINT,
    po_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'DRAFT',
    total_amount DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_po_supp FOREIGN KEY (supplier_id) REFERENCES supplier (supplier_id),
    CONSTRAINT fk_po_so FOREIGN KEY (order_id) REFERENCES sales_order (order_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS purchase_order_item (
    po_item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    po_id BIGINT NOT NULL,
    material_id BIGINT NOT NULL,
    quantity DECIMAL(12, 3) NOT NULL,
    unit_cost DECIMAL(12, 2) NOT NULL,
    line_total DECIMAL(14, 2) NOT NULL,
    CONSTRAINT fk_po_it_order FOREIGN KEY (po_id) REFERENCES purchase_order (po_id) ON DELETE CASCADE,
    CONSTRAINT fk_po_it_mat FOREIGN KEY (material_id) REFERENCES material (material_id)
);

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
    CONSTRAINT fk_inv_order FOREIGN KEY (order_id) REFERENCES sales_order (order_id)
);

CREATE TABLE IF NOT EXISTS payment (
    payment_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    invoice_id BIGINT NOT NULL,
    amount DECIMAL(14, 2) NOT NULL,
    payment_date DATE NOT NULL,
    method VARCHAR(50),
    reference_no VARCHAR(100),
    CONSTRAINT fk_pay_invoice FOREIGN KEY (invoice_id) REFERENCES invoice (invoice_id) ON DELETE CASCADE
);

