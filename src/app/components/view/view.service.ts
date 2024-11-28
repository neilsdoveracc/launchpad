// view.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TileData } from './view.interface';

@Injectable({
  providedIn: 'root' // This makes the service available app-wide
})
export class ViewService {
  private jsonUrl = '/assets/tiles.json'; // Correct the path as needed

  constructor(private http: HttpClient) {}

  getTiles(): Observable<TileData[]> {
    return this.http.get<TileData[]>(this.jsonUrl);
  }
}