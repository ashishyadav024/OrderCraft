import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { UserProfileModalComponent } from '../user-profile-modal/user-profile-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    ChangePasswordModalComponent,
    UserProfileModalComponent
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  private authService = inject(AuthService);
  private router = inject(Router);

  user$ = this.authService.user$;
  availableRoles = ['ADMIN', 'SALES', 'PURCHASE', 'ACCOUNTS'];
  isMobileDrawerOpen = false;
  isChangePasswordModalOpen = false;
  isProfileModalOpen = false;

  constructor() {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileDrawer();
    });
  }

  openChangePasswordModal(): void {
    this.closeMobileDrawer();
    this.isProfileModalOpen = false;
    this.isChangePasswordModalOpen = true;
  }

  closeChangePasswordModal(): void {
    this.isChangePasswordModalOpen = false;
  }

  openProfileModal(): void {
    this.closeMobileDrawer();
    this.isChangePasswordModalOpen = false;
    this.isProfileModalOpen = true;
  }

  closeProfileModal(): void {
    this.isProfileModalOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isMobileDrawerOpen) {
      this.closeMobileDrawer();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window !== 'undefined' && window.innerWidth >= 992 && this.isMobileDrawerOpen) {
      this.closeMobileDrawer();
    }
  }

  toggleMobileDrawer(): void {
    this.isMobileDrawerOpen = !this.isMobileDrawerOpen;
    this.syncBodyScroll();
  }

  closeMobileDrawer(): void {
    this.isMobileDrawerOpen = false;
    this.syncBodyScroll();
  }

  private syncBodyScroll(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMobileDrawerOpen ? 'hidden' : '';
    }
  }

  onLogout(): void {
    this.closeMobileDrawer();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onSwitchRole(role: string): void {
    this.authService.switchRole(role);
  }

  canAccess(roles: string[]): boolean {
    const current = this.authService.getUserRole();
    if (!current) return false;
    if (current === 'ADMIN') return true;
    return roles.includes(current);
  }

  // Active status checks for grouped dropdown menus
  isDashboardActive(): boolean {
    const url = this.router.url;
    return url === '/dashboard' || url === '/';
  }

  isSalesActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/orders') || url.startsWith('/customers');
  }

  isProductionActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/products') || url.startsWith('/materials');
  }

  isProcurementActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/purchase-orders') || url.startsWith('/suppliers');
  }

  isFinanceActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/invoices');
  }

  isAdminActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/users');
  }

  getRoleIcon(role: string): string {
    switch (role) {
      case 'ADMIN': return 'shield';
      case 'SALES': return 'point_of_sale';
      case 'PURCHASE': return 'local_shipping';
      case 'ACCOUNTS': return 'receipt_long';
      default: return 'person';
    }
  }
}
