import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuDeVendas: Array<PoMenuItem> = [
    { label: "Representante" },
    { label: "Catálogo" },
    { label: "Clientes" },
    { label: "Pedidos" },
    { label: "Compras" },
    { label: "Vendas" }
  ];

  menuDeMarketing: Array<PoMenuItem> = [
    { label: "Fotos de produto", link: "marketing/produtos" },
    { label: "Banners" },
    { label: "Campanhas" }
  ];

  menuDeAdministracao: Array<PoMenuItem> = [
    { label: "Representantes" },
    { label: "Clientes" },
    { label: "Condições de pagamento" },
    { label: "Natureza" },
    { label: "Grupo de venda" },
    { label: "Metas" },
  ];

  menuAnalitico: Array<PoMenuItem> = [
    { label: "Relatório de vendas" },
  ];


}
