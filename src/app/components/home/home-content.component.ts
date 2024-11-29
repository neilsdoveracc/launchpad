import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mt-5 home-content">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1 class="text-primary">Welcome, {{ username }}</h1>
          <div class="action-buttons">
            <button class="btn btn-success me-2" routerLink="/home/user">Create User</button>
            <button class="btn btn-primary" routerLink="/home/job">Create JRF</button>
          </div>
        </div>
      </div>

      <div class="card mb-4 analytics-box">
        <div class="card-body">
          <h2 class="card-title text-secondary">Here's a quick overview</h2>
          <div class="row metrics">
            <div class="col-md-4 metric-item">
              <div class="bg-light p-3 rounded">
                <h3 class="text-muted">Total Users</h3>
                <p class="fw-bold display-6">1,234</p>
              </div>
            </div>
            <div class="col-md-4 metric-item">
              <div class="bg-light p-3 rounded">
                <h3 class="text-muted">Active Jobs</h3>
                <p class="fw-bold display-6">56</p>
              </div>
            </div>
            <div class="col-md-4 metric-item">
              <div class="bg-light p-3 rounded">
                <h3 class="text-muted">Completion Rate</h3>
                <p class="fw-bold display-6">87%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-content {
      padding: 20px;
    }
    .action-buttons {
      display: flex;
    }
    .analytics-box {
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .metric-item {
      text-align: center;
    }
  `]
})
export class HomeContentComponent {
  username: string = 'User';


}