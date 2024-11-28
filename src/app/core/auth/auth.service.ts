// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  username: string;
  role: 'admin' | 'vendor';
}

interface LoginResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {
    // Check if user is stored in localStorage on service initialization
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userSubject.next(user);
      this.isAuthenticated = true;
    }
  }

  login(credentials: { username: string, password: string }): Observable<LoginResponse> {
    // Simulate role-based authentication
    // In real application, this would come from your backend
    const isAdmin = credentials.username.toLowerCase().includes('admin');
    const user: User = {
      username: credentials.username,
      role: isAdmin ? 'admin' : 'vendor'
    };

    const response: LoginResponse = {
      token: 'fake-jwt-token',
      user: user
    };

    // Store user info
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(user));
    
    this.isAuthenticated = true;
    this.userSubject.next(user);

    return of(response);
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userSubject.next(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  getUserRole(): string | null {
    return this.userSubject.value?.role || null;
  }

  isAdmin(): boolean {
    return this.userSubject.value?.role === 'admin';
  }

  isVendor(): boolean {
    return this.userSubject.value?.role === 'vendor';
  }
}