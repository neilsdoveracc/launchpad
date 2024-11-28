import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { ViewReqComponent } from './components/view-req/view-req.component';
import { JobComponent } from './components/job/job.component';
import { HomeContentComponent } from './components/home/home-content.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { VendorLayoutComponent } from './components/vendor/vendor.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // Admin routes
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      {
        path: '',
        component: HomeContentComponent
      },
      {
        path: 'view',
        component: ViewComponent,    
      },
      {
        path: 'job',
        component: JobComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
  {
    path: 'view-req',
    component: ViewReqComponent
  },
  // Vendor routes
  {
    path: 'vendor',
    component: VendorLayoutComponent,
    canActivate: [AuthGuard],
    data: { role: 'vendor' },
    children: [
      {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
      },
      {
        path: 'view',
        component: ViewComponent
      },
      {
        path: 'view-req',
        component: ViewReqComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];