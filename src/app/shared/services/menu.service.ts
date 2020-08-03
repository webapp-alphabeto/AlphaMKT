import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { AccessLevel } from "src/app/core/enums/access-level.enum";
import { PoMenuItemNivelDeAcesso } from "../interfaces/po-menu-item-nivel-de-acesso";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private $show = new BehaviorSubject<boolean>(false);
  public showMenu = this.$show.asObservable();
  constructor() {}

  public checkShowMenu(router: Router) {}
  exibirMenu() {
    this.$show.next(true);
  }
  ocultarMenu() {
    this.$show.next(false);
  }

  getMenu(nivelDeAcesso: AccessLevel) {
    if (nivelDeAcesso == AccessLevel.Administracao) {
      return this.menu;
    }

    return this.menu.filter((x) => x.nivelDeAcesso.includes(nivelDeAcesso));
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
      subItems: [
        { label: "Fotos de Produtos", link: "/marketing/produtos" },
        { label: "Banners", link: "/marketing/banners" },
      ],
    },
    {
      label: "Administração",
      icon: "po-icon po-icon-edit",
      shortLabel: "Administração",
      nivelDeAcesso: [AccessLevel.Administracao],
      subItems: [
        { label: "Cliente", link: "administracao/home-admin/cliente" },
        { label: "Representante", link: "administracao/home-admin/representante" },
        { label: "Usuário", link: "administracao/home-admin/usuario" },
        { label: "Grupo de vendas", link: "administracao/home-admin/grupo-de-vendas" },
        { label: "Natureza", link: "administracao/home-admin/natureza" },
        {
          label: "Condições de pagamento",
          link: "administracao/home-admin/condicoes-de-pagamento",
        },
        { label: "Integração", link: "administracao/home-admin/monitor-de-integracao" },
        { label: "Oportunidade de vendas", link: "/oportunidade-de-venda" },
        { label: "Tabela  de preços", link: "/tabela-de-precos" },
        { label: "Estoque virtual", link: "/estoque-virtual" },
      ],
    },
  ];
}
