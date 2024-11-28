import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}
  username = 'John Doe'; // replace with actual username
  userName: string = 'John Doe'; 

  constructor() { }

  ngOnInit(): void {
  }

  createRequest(): void {
    console.log('Create request button clicked!');
    // Add logic to create a new request here
  }
}