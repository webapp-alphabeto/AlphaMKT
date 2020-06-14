import { Component, OnInit } from '@angular/core';
import { PoPageDynamicTableField, PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales-group',
  templateUrl: './sales-group.component.html',
  styleUrls: ['./sales-group.component.css']
})
export class SalesGroupComponent implements OnInit {

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
    { property: 'name', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'active', label: 'Ativo', filter: true, type: 'boolean', booleanFalse: 'Não', booleanTrue: 'Sim', gridColumns: 6 }
  ];
}
