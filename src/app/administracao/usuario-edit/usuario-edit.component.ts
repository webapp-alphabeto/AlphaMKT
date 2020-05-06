import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public readonly actions: PoPageDynamicEditActions = {
    save: 'administracao/usuario',
    saveNew: 'administracao/usuario-new'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Usuários', link: '/administracao/usuario' },
      { label: 'Criar usuário' }
    ]
  };

  public readonly serviceApi = `${environment.serviceApi}usuario`;;

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', key: true, required: false, visible: false },

    { property: 'nome', divider: 'Dados Pessoais', required: true, errorMessage: "Nome é obrigatório ", gridColumns: 4 },
    { property: 'email', label: 'E-mail', required: true, errorMessage: "Email é obrigatório", gridColumns:4 },    
    { property: 'ativo', type: 'boolean', booleanFalse: "Inativo", booleanTrue: "Ativo", gridColumns:2 },
    { property: 'nivelDeAcesso', label: 'Nível de Acesso', options: ['Administrador'], gridColumns:2},
    
  ];


}
