import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';

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
    MatTooltipModule
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  private authService = inject(AuthService);
  private router = inject(Router);

  user$ = this.authService.user$;
  availableRoles = ['ADMIN', 'SALES', 'PURCHASE', 'ACCOUNTS'];

  onLogout(): void {
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
}