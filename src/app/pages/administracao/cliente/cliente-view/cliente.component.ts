import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { PoBreadcrumb, PoMultiselectOption } from '@po-ui/ng-components';
import { ToolBarService } from 'src/app/shared/services/tool-bar.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

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
    { property: 'nomeFantasia', label: 'Nome', filter: true, },
    { property: 'representante', label: 'Representante', filter: true, optionsService: `${environment.serviceApi}representante/po-combo` },
    { property: 'grupoDeVenda', label: 'Grupo de Venda', filter: true, optionsService: `${environment.serviceApi}grupo-de-vendas/po-combo` },
    { property: 'estadoDaIntegracao', label: 'Integração' },
    { property: 'deletado', label: 'Deletado', filter: true, type: 'boolean' }
  ];

}
