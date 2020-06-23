import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AccessLevel } from 'src/app/core/enums/access-level.enum';
import { PoMenuItemNivelDeAcesso } from '../interfaces/po-menu-item-nivel-de-acesso';
import { PoMenuItem } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  exibirMenu = new BehaviorSubject<boolean>(true);
  constructor() { }

  public checkShowMenu(router: Router) {
    if (router.isActive("/home/principal", true)) {
      this.exibirMenu.next(true);
      return;
    }

    if (router.isActive("/home/meu-perfil", true)) {
      this.exibirMenu.next(true);
      return;
    }

    if (router.isActive("/home/alterar-senha", true)) {
      this.exibirMenu.next(true);
      return;
    }

    this.exibirMenu.next(false);
  }

  getMenu(nivelDeAcesso: AccessLevel) {
    if (nivelDeAcesso == AccessLevel.Administracao) {
      // this.menuFiltrado = this.menu;
      return this.menu;
    }

    return this.menu.filter((x) =>
      x.nivelDeAcesso.includes(nivelDeAcesso)
    );
  }

  private menu: Array<PoMenuItemNivelDeAcesso> = [
    {
      label: "Home",
      icon: "po-icon po-icon-home",
      shortLabel: "Home",
      link: "/home",
      nivelDeAcesso: [
        AccessLevel.Administracao,
        AccessLevel.Cliente,
        AccessLevel.Marketing,
        AccessLevel.Representante,
      ],
    },
    {
      label: "Marketing",
      icon: "po-icon po-icon-camera",
      shortLabel: "Marketing",
      nivelDeAcesso: [AccessLevel.Administracao, AccessLevel.Marketing],
      subItems: [{ label: "Fotos de Produtos", link: "/marketing/produtos" }],
    },
    {
      label: "Administração",
      icon: "po-icon po-icon-edit",
      shortLabel: "Administração",
      nivelDeAcesso: [AccessLevel.Administracao],
      subItems: [
        { label: "Cliente", link: "/administracao/cliente" },
        { label: "Representante", link: "/administracao/representante" },
        { label: "Usuário", link: "/administracao/usuario" },
        { label: "Grupo de vendas", link: "/administracao/grupo-de-vendas" },
        { label: "Natureza", link: "/administracao/natureza" },
        {
          label: "Condições de pagamento",
          link: "/administracao/condicoes-de-pagamento",
        },
        { label: "Integração", link: "/administracao/monitor-de-integracao" },
        { label: "Oportunidade de vendas", link: "/oportunidade-de-venda" },
      ],
    },
  ];

}
