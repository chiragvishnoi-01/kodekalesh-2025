import axios from 'axios';
import { UserRole } from '../../types';

const API_URL = import.meta.env.VITE_API_URL;

export interface UserData {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  token: string;
}

class AuthService {
  public storeUser(userData: UserData) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  async login(email: string, password: string): Promise<UserData> {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data) {
      this.storeUser(response.data);
    }
    return response.data;
  }

  async signup(name: string, email: string, password: string, role: string): Promise<UserData> {
    const response = await axios.post(`${API_URL}/auth/register`, { name, email, password, role });
    if (response.data) {
      this.storeUser(response.data);
    }
    return response.data;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getCurrentUser(): UserData | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }
}

export const authService = new AuthService();