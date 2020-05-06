import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    public profileService: ProfileService,
    public auth: AuthService,
    private router: Router) { }

  profileActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-user',
      label: 'Meu Perfil',
      action: () => this.router.navigateByUrl('/meu-perfil')
    },
    {
      icon: 'po-icon-exit',
      label: 'Exit',
      type: 'danger',
      separator: true,
      action: () => this.auth.logout()
    }
  ];

  ngOnInit() {
  }

  menuDeVendas: Array<PoMenuItem> = [
    { label: 'Representante' },
    { label: 'Catálogo' },
    { label: 'Clientes' },
    { label: 'Pedidos' },
    { label: 'Compras' },
    { label: 'Vendas' }
  ];

  menuDeMarketing: Array<PoMenuItem> = [
    { label: 'Fotos de produto', link: 'marketing/produtos' },
    { label: 'Banners' },
    { label: 'Campanhas' }
  ];

  menuDeAdministracao: Array<PoMenuItem> = [
    { label: 'Representantes' },
    { label: 'Clientes' },
    { label: 'Condições de pagamento' },
    { label: 'Natureza' },
    { label: 'Grupo de venda', link: '/administracao/grupo-de-vendas' },
    { label: 'Metas' },
    { label: 'Usuários', link: 'administracao/usuario' },
  ];

  menuAnalitico: Array<PoMenuItem> = [
    { label: 'Relatório de vendas' },
  ];


}
