import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private profileService: ProfileService) { }

  Authenticated = new BehaviorSubject<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!this.tokenService.token;
  }

  Authenticated$(): Observable<boolean> {
    return this.Authenticated.asObservable();
  }

  login(token: string): void {
    this.tokenService.token = token;
    this.Authenticated.next(true);
    this.router.navigateByUrl("/");
  }

  logout(): void {
    this.tokenService.resetToken();    
    this.profileService.resetarProfile();
    this.Authenticated.next(false);
  }
}

