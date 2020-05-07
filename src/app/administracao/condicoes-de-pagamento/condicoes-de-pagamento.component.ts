import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-condicoes-de-pagamento',
  templateUrl: './condicoes-de-pagamento.component.html',
  styleUrls: ['./condicoes-de-pagamento.component.css']
})
export class CondicoesDePagamentoComponent implements OnInit {

  serviceApi = `${environment.serviceApi}condicoes-de-pagamento`;
  constructor() { }

  ngOnInit(): void {
  }

  public readonly actions: PoPageDynamicTableActions = {

    edit: 'administracao/condicoes-de-pagamento-edit/:id',
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Condições de Pagamento' }
    ]
  };

  public readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'condicao', label: 'Condição', filter: true, gridColumns: 6 },
    { property: 'nome', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'acrescimo', label: 'Acrescimo', filter: true, gridColumns: 6 },
    { property: 'ativo', label: 'Ativo', filter: true, type: 'boolean', booleanFalse: 'Não', booleanTrue: 'Sim', gridColumns: 6 }
  ];
}
