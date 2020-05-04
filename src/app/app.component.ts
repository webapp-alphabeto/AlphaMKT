import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PoNotificationService, PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { UserTypeService } from './services/user-type.service';
import { UserIdService } from './services/user-id.service';
import { PoNavbarIconAction, PoNavbarItem	, PoNavbarLiterals  } from '@po-ui/ng-components'

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
    private userIdService: UserIdService) {

    router.events.subscribe((event) => {
      this.isHome = router.isActive('/home/home', true);

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

  acoesDeNavegacao: PoNavbarIconAction[] = [
    {
      label: 'Teste',
      action: () => { this.poNotification.success('Ok') },
      icon: 'po-icon po-icon-cart',
      link: 'https://www.monnalisa.com/home',
      tooltip: 'Teste'
    }
  ];

  itemsDeNavegacao: Array<PoNavbarItem> = [
    { 
      label: 'Teste', 
      link: 'https://www.monnalisa.com/home', 
      action: () => { this.poNotification.success("Ok") } 
    }
  ];

  literaisDeNavegacao: PoNavbarLiterals = {
    navbarLinks: 'Itens de navegação'
  };

  private RemoverAutoCompleteDeTodosInputs() {
    setTimeout(() => {
      var list = Array.from(document.getElementsByTagName("input"));
      list.forEach(input => {
        input.autocomplete = "off";
      });
    }, 1000);
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
    { icon: 'po-icon po-icon-chart-columns', label: 'Minha Pontuação', action: () => this.router.navigateByUrl(`/relatorios/meus-pontos/${this.userIdService.Id}`) },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => this.auth.logout() }
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
