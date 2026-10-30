-- ========================================================
-- OrderCraft: Sample Master & Operational Data Seed Script
-- ========================================================

-- Users (BCrypt Password: Admin@123 / Sales@123 / Purchase@123 / Accounts@123)
MERGE INTO app_user (username, password_hash, role, enabled) KEY(username) VALUES
('admin', '$2a$10$WpP9xL6g5Vw8Q2R8Z9G6sO4P8wN2d5K7e1M9q2B4v6T8x0L2n4P6O', 'ADMIN', true),
('sales', '$2a$10$WpP9xL6g5Vw8Q2R8Z9G6sO4P8wN2d5K7e1M9q2B4v6T8x0L2n4P6O', 'SALES', true),
('purchase', '$2a$10$WpP9xL6g5Vw8Q2R8Z9G6sO4P8wN2d5K7e1M9q2B4v6T8x0L2n4P6O', 'PURCHASE', true),
('accounts', '$2a$10$WpP9xL6g5Vw8Q2R8Z9G6sO4P8wN2d5K7e1M9q2B4v6T8x0L2n4P6O', 'ACCOUNTS', true);

-- Customers
MERGE INTO customer (customer_id, name, email, phone, address) KEY(customer_id) VALUES
(1, 'Tesla Motors India Ltd', 'procurement@tesla.co.in', '+91 98201 11223', 'Plot 12, Indospace Industrial Park, Chakan, Pune, Maharashtra'),
(2, 'Tata Advanced Systems', 'orders@tataadvanced.com', '+91 97110 33445', 'Aerospace SEZ, Adibatla, Hyderabad, Telangana'),
(3, 'L&T Heavy Engineering', 'commercial@larsentoubro.com', '+91 98920 55667', 'Powai Campus, Saki Vihar Road, Mumbai, Maharashtra');

-- Suppliers
MERGE INTO supplier (supplier_id, name, email, phone, address) KEY(supplier_id) VALUES
(1, 'Hindalco Industries', 'sales@hindalco.adityabirla.com', '+91 91234 56780', 'Birla Centurion, Worli, Mumbai, Maharashtra'),
(2, 'Jindal Steel & Power', 'commercial@jindalsteel.com', '+91 98765 43210', 'Jindal Centre, 12 Bhikaji Cama Place, New Delhi'),
(3, 'Bosch Rexroth Automation', 'supplies@boschrexroth.in', '+91 80 6752 1111', 'Plot 96, Electronic City Phase 1, Bengaluru, Karnataka');

-- Products
MERGE INTO product (product_id, sku, name, unit_price) KEY(product_id) VALUES
(1, 'PROD-PUMP-HD', 'Industrial Hydraulic Pumping Station 500bar', 185000.00),
(2, 'PROD-CNC-ROTOR', 'Precision Aerospace Rotor Assembly', 74500.00);

-- Materials
MERGE INTO material (material_id, code, name, unit, stock_qty, unit_cost, supplier_id) KEY(material_id) VALUES
(1, 'MAT-ALUM-6061', 'Aircraft Grade Aluminum 6061-T6 (Billet)', 'kg', 120.000, 350.00, 1),
(2, 'MAT-STEEL-316', 'Stainless Steel 316L Heavy Sheet (2mm)', 'm', 45.000, 720.00, 2),
(3, 'MAT-BRG-6205', 'Deep Groove Ball Bearing 6205-2RS', 'pcs', 250.000, 180.00, 3),
(4, 'MAT-VALVE-HYD', 'High-Pressure Directional Control Valve', 'pcs', 15.000, 4200.00, 3);

