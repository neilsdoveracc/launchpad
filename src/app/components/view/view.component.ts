import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewService } from './view.service';
import { TileData } from './view.interface';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ViewService], // Add this line
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  tiles: TileData[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {
    this.loadTiles();
  }

  private loadTiles(): void {
    this.viewService.getTiles().subscribe({
      next: (data) => {
        this.tiles = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load tiles';
        this.loading = false;
        console.error('Error loading tiles:', error);
      }
    });
  }
}