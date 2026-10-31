import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRoles: string[] = route.data?.['roles'] || [];
  const currentRole = authService.getUserRole();

  if (authService.isLoggedIn() && currentRole && (currentRole === 'ADMIN' || expectedRoles.includes(currentRole))) {
    return true;
  }

  router.navigate(['/dashboard']);
  return false;
};
