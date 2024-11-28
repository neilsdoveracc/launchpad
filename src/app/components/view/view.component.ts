import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewService } from './view.service'; // Ensure correct path
import { TileData } from './view.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ViewService], // Make sure this is included
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  tile: TileData[] = [];

  constructor(
    private viewService: ViewService, // Ensure ViewService is correctly imported
    private router: Router // Import Router to handle navigation
  ) {}

  ngOnInit(): void {
    // Fetch the tile data
    this.viewService.getTiles().subscribe((data) => {
      this.tile = data;
    });
  }

  // Method to navigate to view-req with the selected tile data
  navigateToViewReq(tile: TileData): void {
    this.router.navigate(['/view-req'], {
      state: { data: tile } // Pass the selected tile data as state
    });
  }
}
