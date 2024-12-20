import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { TokenService } from "./token.service";
import { ProfileService } from "src/app/shared/services/profile.service";
import { CheckInService } from "src/app/shared/services/check-in.service";
import { AccessLevel } from "../enums/access-level.enum";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private profileService: ProfileService,
    private checkInService: CheckInService
  ) {}

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
    if (this.tokenService.Claims.accessLevel == AccessLevel.Representante) {
      this.router.navigateByUrl("/representante");
      return;
    }
    this.router.navigateByUrl("/");
  }

  logout(): void {
    this.tokenService.resetToken();
    this.profileService.resetarProfile();
    this.checkInService.resetarCheckIn();
    this.Authenticated.next(false);
  }
}
