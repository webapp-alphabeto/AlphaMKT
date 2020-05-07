import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-natureza-edit',
  templateUrl: './natureza-edit.component.html',
  styleUrls: ['./natureza-edit.component.css']
})
export class NaturezaEditComponent implements OnInit {

  public readonly serviceApi = `${environment.serviceApi}natureza`;;

  public readonly actions: PoPageDynamicEditActions = {
    save: 'administracao/natureza'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Natureza', link: '/administracao/natureza' },
      { label: 'Editar natureza' }
    ]
  };


  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', key: true, required: false, visible: false },

    { property: 'nome', required: true, errorMessage: "Nome é obrigatório ", gridColumns: 4, disabled:true },
    { property: 'ativo', type: 'boolean', booleanFalse: "Inativo", booleanTrue: "Ativo", gridColumns: 2 },

  ];

  constructor() { }

  ngOnInit(): void {
  }


}
