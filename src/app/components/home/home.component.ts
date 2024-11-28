// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string = 'User'; // Replace with actual username logic
  isSidebarExpanded: boolean = false;

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}