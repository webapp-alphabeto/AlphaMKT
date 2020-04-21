import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PoNotificationService, PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public routeLoading = false;
  public isHome = true;

  constructor(
    private router: Router,
    private poNotification: PoNotificationService,
    public auth: AuthService) {


    router.events.subscribe((event) => {
      this.isHome = router.isActive('/home/principal', true);

      this.configurarMenu(true);

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




  ngOnInit(): void {

    this.VerificarSeUsuarioJaEstaAutenticado();

  }

  private VerificarSeUsuarioJaEstaAutenticado() {
    // this.auth.Autenticado$().subscribe((autenticado: boolean) => {
    //   if (!autenticado) {
    //     this.router.navigateByUrl("/login");

    //   }
    // });
  }

  menuFiltrado: Array<PoMenuItem> = [];

  configurarMenu(administrador: boolean) {
    if (administrador) {
      this.menuFiltrado = this.menus;
      return;
    }

    this.menuFiltrado = this.menus.filter(x => x.label !== 'Cadastros');

  }

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Meu Perfil', action: () => this.router.navigateByUrl("/meu-perfil") },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => this.auth.logout() }
  ];

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-po', label: 'PO news, stay tuned!', type: 'danger',
      action: item => () => { console.log("implementar") }
    },
    {
      icon: 'po-icon-message', label: 'New message', type: 'danger',
      action: item => () => { console.log("implementar") }
    },
  ];

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }

  menus: Array<PoMenuItem> = [
    { label: 'Home', icon: 'po-icon po-icon-home', shortLabel: 'Home', link: '/home/home' },
    { label: 'Reunião', icon: 'po-icon po-icon-calendar', shortLabel: 'Reunião', link: '/reuniao/agenda' },
    {
      label: 'Contribuições', icon: 'po-icon po-icon-manufacture', shortLabel: 'Contribuições', subItems: [
        { label: 'Convidado', link: '/contribuicoes/convidados' },
        { label: 'Cara-a-Cara', link: '/contribuicoes/cara-a-cara' },
        { label: 'Referência Qualificada', link: '/contribuicoes/referencia-qualificada' },
        { label: 'Negócio Fechado', link: '/contribuicoes/negocio-fechado', },
      ]
    },
    {
      label: 'Cadastros', icon: 'po-icon po-icon-settings', shortLabel: 'Cadastros', subItems: [
        { label: 'Usuário', link: '/cadastros/usuario' },
        { label: 'Categoria', link: '/cadastros/categoria' },
        { label: 'Empresa', link: '/cadastros/empresa' },
        { label: 'Grupo', link: '/cadastros/grupo', },
        { label: 'Local para reuniões', link: '/cadastros/local' },
      ]
    },
    {
      label: 'Analytics', icon: 'po-icon po-icon-chart-columns', shortLabel: 'Relatórios', subItems: [
        { label: 'Geral', link: '/relatorios/geral' },
        { label: 'Membros', link: '/relatorios/membros' },
      ]
    }
  ];

}
