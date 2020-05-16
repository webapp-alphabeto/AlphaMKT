import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserTypeService } from "src/app/services/user-type.service";
import { NivelDeAcesso } from "src/app/autenticacao/nivel-de-acesso.enum";
import { PoNotificationService } from "@po-ui/ng-components";
import { IApresentacaoButtons } from 'src/app/interfaces/iapresentacao-buttons';

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
    private typeUser: UserTypeService,
    private router: Router,
    private notification: PoNotificationService
  ) {}

  ngOnInit() {}

  irPara(): void {
    if (this.typeUser.nivelDeAcesso == NivelDeAcesso.Administracao) {
      this.router.navigateByUrl('/administracao');
      return;
    }

    if (this.typeUser.nivelDeAcesso == NivelDeAcesso.Marketing) {
      this.router.navigateByUrl('/marketing');
      return;
    }

    if(this.typeUser.nivelDeAcesso == NivelDeAcesso.Representante) {
      this.router.navigateByUrl('/representante');
      return;
    }

    this.notification.warning('Sem rota definida.')
  }
}
