import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TileData } from './view.interface';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getTiles(): Observable<TileData[]> {
    return this.http.get<TileData[]>(this.apiUrl);
  }
}