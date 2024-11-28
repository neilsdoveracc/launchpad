import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
logout() {
throw new Error('Method not implemented.');
}
  username = 'John Doe'; // replace with actual username
  userName: string = 'John Doe'; 

  vendors = [
    { id: 1, name: 'Vendor 1', jrsCreated: 5, resumesUploaded: 20, resumesShortlisted: 15, jrsInProgress: 3, jrsClosed: 2 },
    { id: 2, name: 'Vendor 2', jrsCreated: 7, resumesUploaded: 25, resumesShortlisted: 18, jrsInProgress: 2, jrsClosed: 5 },
    { id: 3, name: 'Vendor 3', jrsCreated: 3, resumesUploaded: 10, resumesShortlisted: 8, jrsInProgress: 1, jrsClosed: 2 },
  ];

  jrStatuses = [
    { status: 'Initiated', count: 10 },
    { status: 'BU Head Approval Pending', count: 5 },
    { status: 'Super Manager Approval Pending', count: 3 },
    { status: 'VMT Approval Pending', count: 2 },
    { status: 'BU Head Approved', count: 7 },
    { status: 'Super Manager Approved', count: 6 },
    { status: 'VMT Approved', count: 4 },
    { status: 'In Progress', count: 12 },
    { status: 'Resumes Uploaded', count: 8 },
    { status: 'Closed', count: 5 }
  ];

  // Charts Data
  chartData = {
    labels: ['Initiated', 'BU Head Approval Pending', 'Super Manager Approval Pending', 'VMT Approval Pending', 'In Progress', 'Closed'],
    datasets: [
      {
        data: [12, 5, 3, 2, 12, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF7F50', '#8A2BE2'],
        hoverBackgroundColor: ['#FF5A5E', '#36A2EB', '#FFCE56', '#4CAF50', '#FF7F50', '#8A2BE2']
      }
    ]
  };
  
  // Example of time breakdown for approval stages (time in days for example)
  approvalTime = {
    'BU Head Approval': 2,  // 2 days
    'Super Manager Approval': 4,  // 4 days
    'VMT Approval': 5  // 5 days
  };

  createRequest(): void {
    console.log('Create request button clicked!');
    // Add logic to create a new request here
  }
}