import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'job', component: JobComponent },
      // You can add a data component route here when you create it
      // { path: 'data', component: DataComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];