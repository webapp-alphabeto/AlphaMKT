import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public readonly serviceApi = `${environment.serviceApi}usuario`;;
  
  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Usuários', link: '/administracao/usuario' },
      { label: 'Criar usuário' }
    ]
  };
  
  public readonly actions: PoPageDynamicEditActions = {
    save: 'administracao/usuario',
    saveNew: 'administracao/usuario-new'
  };
  
  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', key: true, required: false, visible: false },
  
    { property: 'name', divider: 'Dados Pessoais', required: true, errorMessage: "Nome é obrigatório ", gridColumns: 4 },
    { property: 'email', label: 'E-mail', required: true, errorMessage: "Email é obrigatório", gridColumns:4 },    
    { property: 'active', type: 'boolean', booleanFalse: "Inativo", booleanTrue: "Ativo", gridColumns:2 },
    { property: 'accessLevel', label: 'Nível de Acesso', optionsService: `${this.serviceApi}/niveis-de-acesso` },
    
  ];

  constructor() { }
  
  ngOnInit(): void {
  }
  
}
