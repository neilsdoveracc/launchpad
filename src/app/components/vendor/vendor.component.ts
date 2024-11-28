// src/app/components/vendor/vendor-layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="vendor-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand">Vendor Dashboard</span>
          <div class="navbar-nav">
            <a class="nav-link" routerLink="/vendor/view" routerLinkActive="active">View</a>
            <a class="nav-link" routerLink="/vendor/view-req" routerLinkActive="active">View Requests</a>
            <a class="nav-link" (click)="logout()" style="cursor: pointer;">Logout</a>
          </div>
        </div>
      </nav>

      <div class="content p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .vendor-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    .content {
      margin-top: 20px;
    }
    .active {
      font-weight: bold;
      color: #007bff !important;
    }
  `]
})
export class VendorLayoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}