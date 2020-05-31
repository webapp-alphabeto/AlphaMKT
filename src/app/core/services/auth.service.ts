import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private tokenService: TokenService) { }

  Autenticado = new BehaviorSubject<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!this.tokenService.token;
  }

  Autenticado$(): Observable<boolean> {
    return this.Autenticado.asObservable();
  }

  login(token: string): void {
    this.tokenService.token = token;
    this.Autenticado.next(true);
    this.router.navigateByUrl("/");
  }

  logout(): void {
    this.tokenService.resetarToken();    
    this.Autenticado.next(false);
  }
}

