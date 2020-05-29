import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ProfileService } from '../../shared/services/profile.service';
import { UserIdService } from '../../shared/services/user-id.service';
import { UserTypeService } from './user-type.service';
import { ILoginResponse } from '../interfaces/ilogin-response';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private token: TokenService,
    private profile: ProfileService,
    private userid: UserIdService,
    private userType: UserTypeService) { }

  Autenticado = new BehaviorSubject<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!this.token.token;
  }

  Autenticado$(): Observable<boolean> {
    return this.Autenticado.asObservable();
  }

  login(login: ILoginResponse): void {
    this.profile.profile = login.profile;
    this.token.token = login.token;
    this.userid.Id = login.id;
    this.userType.nivelDeAcesso = login.nivelDeAcesso;
    this.Autenticado.next(true);
    this.router.navigateByUrl("/");
  }

  logout(): void {
    this.token.resetarToken();
    this.profile.resetarProfile();
    this.userid.resetarId();
    this.userType.resetarNivelDeAcesso();
    this.Autenticado.next(false);
  }
}

