import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';
import { AuthService } from './core/services/auth.service';
import { ProfileService } from './shared/services/profile.service';
import { UserTypeService } from './core/services/user-type.service';
import { PoMenuItemNivelDeAcesso } from './shared/interfaces/po-menu-item-nivel-de-acesso';
import { ToolBarService } from './shared/services/tool-bar.service';
import { NivelDeAcesso } from './core/enums/nivel-de-acesso.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public routeLoading = false;
  public exibirMenu = true;


  constructor(
    private router: Router,
    public auth: AuthService,
    public profileService: ProfileService,
    private userType: UserTypeService,
    
    public toolBarService: ToolBarService) {

    router.events.subscribe((event) => {

      this.ExibirMenu(router);


      this.configurarMenu(this.userType.nivelDeAcesso);

      if (event instanceof NavigationStart) {
        this.routeLoading = true;
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.routeLoading = false;
      }

    });

  }

  private ExibirMenu(router: Router) {
    if (router.isActive('/home/principal', true)) {
      this.exibirMenu = true;
      return;
    }

    if (router.isActive('/home/meu-perfil', true)) {
      this.exibirMenu = true;
      return;
    }

    if (router.isActive('/home/alterar-senha', true)) {
      this.exibirMenu = true;
      return;
    }

    this.exibirMenu = false;
  }

  ngOnInit(): void {

    this.VerificarSeUsuarioJaEstaAutenticado();

  }

  private VerificarSeUsuarioJaEstaAutenticado() {
    this.auth.Autenticado$().subscribe((autenticado: boolean) => {
      if (!autenticado) {
        this.router.navigateByUrl("/login");

      }
    });
  }

  menuFiltrado: Array<PoMenuItem> = [];

  configurarMenu(nivelDeAcesso: NivelDeAcesso) {
    if (nivelDeAcesso == NivelDeAcesso.Administracao) {
      this.menuFiltrado = this.menus;
      return;
    }

    this.menuFiltrado = this.menus.filter(x => x.nivelDeAcesso.includes(nivelDeAcesso));
  }

  menus: Array<PoMenuItemNivelDeAcesso> = [
    {
      label: 'Home', icon: 'po-icon po-icon-home', shortLabel: 'Home', link: '/home', nivelDeAcesso: [
        NivelDeAcesso.Administracao,
        NivelDeAcesso.Cliente,
        NivelDeAcesso.Marketing,
        NivelDeAcesso.Representante
      ]
    },
    {
      label: 'Marketing', icon: 'po-icon po-icon-camera', shortLabel: 'Marketing', nivelDeAcesso: [
        NivelDeAcesso.Administracao,
        NivelDeAcesso.Marketing
      ], subItems: [
        { label: 'Fotos de Produtos', link: '/marketing/produtos' }
      ]
    },
    {
      label: 'Administração', icon: 'po-icon po-icon-edit', shortLabel: 'Administração', nivelDeAcesso: [
        NivelDeAcesso.Administracao
      ], subItems: [
        { label: 'Cliente', link: '/administracao/cliente' },
        { label: 'Representante', link: '/administracao/representante' },
        { label: 'Usuário', link: '/administracao/usuario' },
        { label: 'Grupo de vendas', link: '/administracao/grupo-de-vendas' },
        { label: 'Natureza', link: '/administracao/natureza' },
        { label: 'Condições de pagamento', link: '/administracao/condicoes-de-pagamento' },
        { label: 'Integração', link: '/administracao/monitor-de-integracao' },
      ]
    },

  ];



}
