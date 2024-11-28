// home-content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-content">
      <div class="header">
        <h1>Welcome, {{ username }}</h1>
        <div class="action-buttons">
          <button class="btn create-user" (click)="createUser()">Create User</button>
          <button class="btn create-job" routerLink="/home/job">Create Job</button>
        </div>
      </div>

      <div class="analytics-box">
        <h2>Analytics Dashboard</h2>
        <div class="analytics-content">
          <div class="metrics">
            <div class="metric-item">
              <h3>Total Users</h3>
              <p>1,234</p>
            </div>
            <div class="metric-item">
              <h3>Active Jobs</h3>
              <p>56</p>
            </div>
            <div class="metric-item">
              <h3>Completion Rate</h3>
              <p>87%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-content {
      padding: 20px;
      height: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }

    h1 {
      margin: 0;
      color: #333;
    }

    .action-buttons {
      display: flex;
      gap: 15px;
    }

    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .create-user {
      background-color: #4CAF50;
      color: white;
      
      &:hover {
        background-color: #45a049;
      }
    }

    .create-job {
      background-color: #2196F3;
      color: white;
      
      &:hover {
        background-color: #1976D2;
      }
    }

    .analytics-box {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 25px;
      height: calc(100% - 100px);
      
      h2 {
        margin: 0 0 20px 0;
        color: #333;
        font-size: 1.5rem;
      }
    }

    .analytics-content {
      height: calc(100% - 40px);
      overflow-y: auto;
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .metric-item {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      text-align: center;

      h3 {
        margin: 0 0 10px 0;
        color: #666;
        font-size: 1rem;
      }

      p {
        margin: 0;
        color: #333;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  `]
})
export class HomeContentComponent {
  username: string = 'User';

  createUser() {
    // Add your create user logic here
  }
}