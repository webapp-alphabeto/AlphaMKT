import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-usuario',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  serviceApi = `${environment.serviceApi}usuario`;
  constructor() { }

  ngOnInit(): void {

  }

  public readonly actions: PoPageDynamicTableActions = {
    new: 'administracao/usuario-new',
    edit: 'administracao/usuario-edit/:id',
    remove: true,
    removeAll: true
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Usuários' }
    ]
  };

  public readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'email', label: 'E-mail', filter: true, gridColumns: 6, duplicate: true },
    { property: 'active', label: 'Ativo', type: 'boolean', booleanFalse: 'Não', booleanTrue: 'Sim', gridColumns: 6 },
    { property: 'accessLevel', label: 'Nível de acesso', filter: true, duplicate: true, optionsService: `${this.serviceApi}/niveis-de-acesso`, gridColumns: 12 }
  ];

}
