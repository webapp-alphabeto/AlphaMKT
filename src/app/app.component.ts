import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PoDialogService,PoNotificationService, PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { UserTypeService } from './services/user-type.service';
import { UserIdService } from './services/user-id.service';


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
    public auth: AuthService,
    public profileService: ProfileService,
    private userType: UserTypeService,
    private userIdService: UserIdService,
    private poDialog: PoDialogService) {

    router.events.subscribe((event) => {
      this.isHome = router.isActive('/home/principal', true);

      this.configurarMenu(this.userType.nivelDeAcesso == 'Administrador');

      if (event instanceof NavigationStart) {
        this.routeLoading = true;
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.routeLoading = false;
        this.RemoverAutoCompleteDeTodosInputs();
      }

    });

  }

  private RemoverAutoCompleteDeTodosInputs() {
    setTimeout(() => {
      var list = Array.from(document.getElementsByTagName("input"));
      list.forEach(input => {
        input.autocomplete = "off";
      });
    }, 1000);
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

  configurarMenu(administrador: boolean) {
    if (administrador) {
      this.menuFiltrado = this.menus;
      return;
    }

    this.menuFiltrado = this.menus
      .filter(x => x.label !== 'Cadastros')
      .filter(x => x.label !== 'Analytics');

  }

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Meu Perfil', action: () => this.router.navigateByUrl("/meu-perfil") },    
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => this.auth.logout() }
  ];

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }

  menus: Array<PoMenuItem> = [
    { label: 'Home', icon: 'po-icon po-icon-home', shortLabel: 'Home', link: '/home' },
    {
      label: 'Cadastros', icon: 'po-icon po-icon-settings', shortLabel: 'Cadastros', subItems: [
        { label: 'Usuário', link: '/administracao/usuario' },
      ]
    },

  ];



}
