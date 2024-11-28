import { Injectable } from '@angular/core';

interface UserRole {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserRole(): UserRole | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString) as UserRole;
    }
    return null;
  }
}