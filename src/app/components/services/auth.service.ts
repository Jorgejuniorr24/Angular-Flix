import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Importando throwError
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Altere para a URL da sua API

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      catchError(this.handleError)
    );
  }

  loginWithGoogle(): Observable<any> {
    return this.http.get(`${this.apiUrl}/google-login`).pipe(
      catchError(this.handleError)
    );
  }

  loginWithFacebook(): Observable<any> {
    return this.http.get(`${this.apiUrl}/facebook-login`).pipe(
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  private handleError(error: any): Observable<any> {
    console.error(error);
    return throwError(error); // Usando throwError para retornar o Observable com erro
  }
}
