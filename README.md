# OrderCraft: Manufacturing Order Management System (OMS)

A full-stack, enterprise-grade Manufacturing Order Management System (OMS) built with **Spring Boot 4 / Java 17+ / 26**, **Angular 22**, and **MySQL / Oracle DB compatible architecture**.

OrderCraft automates the entire manufacturing **Order-to-Cash (O2C)** operational lifecycle:
1. **Sales Order Intake & Configuration**: Multi-item line product order entry with real-time pricing and tax calculations.
2. **Automated Bill-of-Materials (BOM) Explosion**: Compares component requirements against real-time inventory balances and detects material shortfalls.
3. **1-Click Procurement Generation**: Automatically generates grouped Purchase Orders for identified material shortages per supplier.
4. **Goods Receipt Inventory Sync**: Receiving purchase orders instantly increments warehouse raw material stock levels.
5. **Corporate Tax Invoicing**: Generates GST invoices with configurable tax rates, payment due dates, and printable letterheads.
6. **Payment Tracking & Settlement**: Records partial and full payments with reference numbers, dynamically updating order status to `PAID`.
7. **Role-Based Access Control (RBAC)**: Enforces security across `ADMIN`, `SALES`, `PURCHASE`, and `ACCOUNTS` profiles.

---

## Architecture & Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Angular 22, Angular Material, TypeScript 6.0, RxJS, Vitest |
| **Backend** | Java 17+, Spring Boot 4.1.1, Spring Data JPA, Spring Security, JJWT (v0.12.6) |
| **Database** | MySQL 8.0+ / Oracle DB compatible schema |
| **Communication** | RESTful JSON API with JWT Bearer Token authorization & reverse proxy routing |

---

## Quick Start & Running the Application

### 1. Database Setup (MySQL)
Ensure your MySQL server is running on port 3306. Run the included schema script to create and seed the database:

```bash
# Using MySQL Command Line or Workbench
mysql -u root -p < ordercraft_schema.sql
```

*Note: In `application.properties`, `spring.jpa.hibernate.ddl-auto=update` is enabled, which also automatically creates and synchronizes tables.*

### 2. Run the Spring Boot Backend
From the `backend` folder:
```bash
cd backend
# Run via Maven Wrapper or IntelliJ IDEA (Run BackendApplication)
./mvnw spring-boot:run
```
Backend API starts at: `http://localhost:8080/api`

### 3. Run the Angular Frontend
From the `ordercraft-frontend` folder:
```bash
cd ordercraft-frontend
npm start
```
Angular starts at: `http://localhost:4200`
Requests to `/api/*` are automatically proxied to `http://localhost:8080/api` via `proxy.conf.json`.

---

## Default User Accounts (RBAC)

The system automatically initializes the following pre-configured user credentials via `DataSeeder.java`:

| Role | Username | Password | Access Capabilities |
|---|---|---|---|
| **ADMIN** | `admin` | `Admin@123` | Full access across all modules, User Administration |
| **SALES** | `sales` | `Sales@123` | Customers, Products & BOM, Sales Orders, Invoice viewing |
| **PURCHASE** | `purchase` | `Purchase@123` | Suppliers, Raw Materials, Purchase Orders & Receiving |
| **ACCOUNTS** | `accounts` | `Accounts@123` | Invoices generation, Payment processing, Financial audits |

*A 1-click Quick Login toolbar is provided on the Login page and a live Role Switcher is available in the top navbar for easy evaluation.*

---

## End-to-End Workflow Demonstration

1. **Log in** as `sales` or `admin`.
2. Navigate to **Sales Orders** (`/orders`) and click **New Sales Order**. Select a customer and add products with quantities.
3. Open the created order to inspect the **BOM Requirements**. The system calculates raw materials required vs. available stock, highlighting material shortages in red.
4. Click **Auto-Generate Purchase Orders**. OrderCraft groups shortages by supplier and creates draft POs.
5. Switch to **Procurement** (`/purchase-orders`) or switch role to `PURCHASE`. Click **Receive Goods** on the newly created PO to increment warehouse inventory.
6. Return to **Sales Orders** and click **Generate Tax Invoice** on the completed order.
7. Switch role to `ACCOUNTS` or navigate to **Invoices & Payments** (`/invoices`). Click **Record Payment** to log customer settlement. Once paid in full, the order automatically marks as `PAID`.

