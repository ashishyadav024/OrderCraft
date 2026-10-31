import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'orders',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'SALES'] },
    loadComponent: () =>
      import('./features/orders/order-list.component').then((m) => m.OrderListComponent)
  },
  {
    path: 'products',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'SALES'] },
    loadComponent: () =>
      import('./features/products/product-list.component').then((m) => m.ProductListComponent)
  },
  {
    path: 'materials',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'PURCHASE'] },
    loadComponent: () =>
      import('./features/materials/material-list.component').then((m) => m.MaterialListComponent)
  },
  {
    path: 'purchase-orders',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'PURCHASE'] },
    loadComponent: () =>
      import('./features/purchase-orders/po-list.component').then((m) => m.PoListComponent)
  },
  {
    path: 'invoices',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'ACCOUNTS'] },
    loadComponent: () =>
      import('./features/invoices/invoice-list.component').then((m) => m.InvoiceListComponent)
  },
  {
    path: 'customers',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'SALES'] },
    loadComponent: () =>
      import('./features/customers/customer-list.component').then((m) => m.CustomerListComponent)
  },
  {
    path: 'suppliers',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'PURCHASE'] },
    loadComponent: () =>
      import('./features/suppliers/supplier-list.component').then((m) => m.SupplierListComponent)
  },
  {
    path: 'users',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN'] },
    loadComponent: () =>
      import('./features/users/user-list.component').then((m) => m.UserListComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
