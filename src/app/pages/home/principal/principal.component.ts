import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PoNotificationService } from "@po-ui/ng-components";

import { IApresentacaoButtons } from 'src/app/shared/interfaces/iapresentacao-buttons';
import { AccessLevel } from 'src/app/core/enums/access-level.enum';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.css"],
})
export class PrincipalComponent implements OnInit {
  buttons: IApresentacaoButtons[] = [
    {
      buttonAction: () => {
        this.irPara();
      },
      buttonIcon: 'po-icon po-icon-ok',
      buttonLabel: 'Começar',
    },
  ];
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private notification: PoNotificationService
  ) {}

  ngOnInit() {}

  irPara(): void {
    if (this.tokenService.Claims.accessLevel == AccessLevel.Administracao) {
      this.router.navigateByUrl('/administracao');
      return;
    }

    if (this.tokenService.Claims.accessLevel == AccessLevel.Marketing) {
      this.router.navigateByUrl('/marketing');
      return;
    }

    if(this.tokenService.Claims.accessLevel == AccessLevel.Representante) {
      this.router.navigateByUrl('/representante');
      return;
    }

    this.notification.warning('Sem rota definida.')
  }
}
