import { Component, OnInit } from '@angular/core';
import { PoPageDynamicTableField, PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-grupo-de-vendas',
  templateUrl: './grupo-de-vendas.component.html',
  styleUrls: ['./grupo-de-vendas.component.css']
})
export class GrupoDeVendasComponent implements OnInit {

  serviceApi = `${environment.serviceApi}grupo-de-vendas`;
  constructor() { }

  ngOnInit(): void {
  }

  public readonly actions: PoPageDynamicTableActions = {

    edit: 'administracao/grupo-de-vendas-edit/:id',
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Grupo de vendas' }
    ]
  };

  public readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'nome', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'ativo', label: 'Ativo', filter: true, type: 'boolean', booleanFalse: 'Não', booleanTrue: 'Sim', gridColumns: 6 }
  ];
}
