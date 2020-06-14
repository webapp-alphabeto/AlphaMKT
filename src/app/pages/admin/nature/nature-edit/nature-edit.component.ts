import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-natureza-edit',
  templateUrl: './nature-edit.component.html',
  styleUrls: ['./nature-edit.component.css']
})
export class NatureEditComponent implements OnInit {

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

    { property: 'name', required: true, errorMessage: "Nome é obrigatório ", gridColumns: 4, disabled:true },
    { property: 'active', type: 'boolean', booleanFalse: "Inativo", booleanTrue: "Ativo", gridColumns: 2 },

  ];

  constructor() { }

  ngOnInit(): void {
  }


}
