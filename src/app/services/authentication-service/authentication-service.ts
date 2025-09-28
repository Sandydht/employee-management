import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, RegisterRequest } from '../../models/authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = environment.baseUrl;

  constructor(
    private readonly http: HttpClient
  ) { }

  register(payload: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/register`, payload);
  }

  login(payload: LoginRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/login`, payload);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/logout`, {});
  }

  profile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/authentication/profile`);
  }

  refresh(): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/refresh`, {});
  }
}
