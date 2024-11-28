import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface User {
  username: string;
  // Add other user properties as needed
}

interface LoginResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = true; // Set to true by default
  private user: User | null = { username: 'Default User' };

  constructor() { }

  login(credentials: { username: string, password: string }): Observable<LoginResponse> {
    // Simulate a successful login
    this.isAuthenticated = true;
    this.user = { username: credentials.username };
    
    const response: LoginResponse = {
      token: 'fake-jwt-token',
      user: this.user
    };

    return of(response); // Return an Observable
  }

  logout(): void {
    this.isAuthenticated = false;
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string {
    return this.user?.username || '';
  }
}