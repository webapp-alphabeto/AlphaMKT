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
    { label: 'Condições de pagamento', link: '/administracao/condicoes-de-pagamento' },
    { label: 'Natureza', link: 'administracao/natureza' },
    { label: 'Grupo de venda', link: '/administracao/grupo-de-vendas' },
    { label: 'Usuários', link: 'administracao/usuario' },
    { label: 'Integração', link: 'administracao/monitor-de-integracao' },
  ];

  menuAnalitico: Array<PoMenuItem> = [
    { label: 'Relatório de vendas' },
  ];

  sampleItems: Array<any> = [
    {
      title: 'Administrar',
      description: 'Cadastro de parâmetros e configurações',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: '/administracao',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'Marketing',
      description: 'Meditating won’t solve your problems — but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: '/marketing',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Vendas',
      description: 'You Can’t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }


}
