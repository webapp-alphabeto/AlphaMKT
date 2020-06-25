import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { PoNotificationService } from "@po-ui/ng-components";

import { AccessLevel } from "../enums/access-level.enum";
import { TokenService } from "../services/token.service";

@Injectable({
  providedIn: "root",
})
export class MarketingGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private poNotification: PoNotificationService
  ) {}

  canActivate(): boolean {
    const response =
      this.tokenService.Claims.accessLevel == AccessLevel.Marketing
      || this.tokenService.Claims.accessLevel == AccessLevel.Administracao;
    if (!response) this.poNotification.error("Não permitido");
    return response;
  }
}
