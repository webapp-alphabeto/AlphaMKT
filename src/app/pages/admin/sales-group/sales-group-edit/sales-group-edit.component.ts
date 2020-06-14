import { Component, OnInit } from '@angular/core';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales-group-edit',
  templateUrl: './sales-group-edit.component.html',
  styleUrls: ['./sales-group-edit.component.css']
})
export class SalesGroupEditComponent implements OnInit {

  public readonly serviceApi = `${environment.serviceApi}grupo-de-vendas`;;

  public readonly actions: PoPageDynamicEditActions = {
    save: 'administracao/grupo-de-vendas'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Grupo de vendas', link: '/administracao/grupo-de-vendas' },
      { label: 'Editar grupo de vendas' }
    ]
  };


  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', key: true, required: false, visible: false },

    { property: 'name', required: true, errorMessage: "Nome é obrigatório ", gridColumns: 4, disabled:true },
    { property: 'active', type: 'boolean', booleanFalse: "Inativo", booleanTrue: "Ativo", gridColumns: 2 },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
