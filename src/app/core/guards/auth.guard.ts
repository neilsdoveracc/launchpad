// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getUserRole();
      const requiredRole = route.data['role'];

      if (!requiredRole || userRole === requiredRole) {
        return true;
      } else {
        // Redirect to appropriate dashboard based on role
        this.router.navigate([userRole === 'admin' ? '/home' : '/vendor']);
        return false;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}