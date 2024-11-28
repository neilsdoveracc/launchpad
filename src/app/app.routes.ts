import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { JobComponent } from './components/job/job.component';
import { HomeContentComponent } from './components/home/home-content.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeContentComponent
      },
      {
        path: 'view',
        component: ViewComponent
      },
      {
        path: 'job',
        component: JobComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];