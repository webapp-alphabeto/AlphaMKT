import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  serviceApi = `${environment.serviceApi}cliente`;
  constructor() { }

  ngOnInit(): void {
    
  }

  public readonly actions: PoPageDynamicTableActions = {
    new: 'administracao/cliente-new',
    edit: 'administracao/cliente-edit/:id',
    remove: true,
    removeAll: true
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Cliente' }
    ]
  };

  public readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'fantasyName', label: 'Nome', filter: true, },
    { property: 'representative', label: 'Representante', filter: true, optionsService: `${environment.serviceApi}representante/po-combo` },
    { property: 'salesGroup', label: 'Grupo de Venda', filter: true, optionsService: `${environment.serviceApi}grupo-de-vendas/po-combo` },
    { property: 'integrationStatus', label: 'Integração' },
    { property: 'deleted', label: 'Deletado', filter: true, type: 'boolean' }
  ];

}
