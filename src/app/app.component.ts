import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PoDialogService, PoNotificationService, PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { UserTypeService } from './services/user-type.service';
import { NivelDeAcesso } from './autenticacao/nivel-de-acesso.enum';
import { PoMenuItemNivelDeAcesso } from './interfaces/po-menu-item-nivel-de-acesso';

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
    private poNotification: PoNotificationService,
    public auth: AuthService,
    public profileService: ProfileService,
    private userType: UserTypeService,
    private poDialog: PoDialogService) {

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

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'po-icon-message', label: 'New message', type: 'danger', action: item => this.openDialog(item) }
  ];

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: `Hello Mr. Dev! Congratulations, you are a TOTVER!`,
      ok: undefined
    });

    item.type = 'default';
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

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Meu Perfil', action: () => this.router.navigateByUrl("/home/meu-perfil") },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => this.auth.logout() }
  ];

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
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
