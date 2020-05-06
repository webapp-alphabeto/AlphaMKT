import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { PoBreadcrumb, PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

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

  public readonly cityOptions: Array<PoMultiselectOption> = [
    { value: 'Administrador', label: 'Administrador' }
  ];

  public readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'nome', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'email', label: 'E-mail', filter: true, gridColumns: 6, duplicate: true },
    { property: 'ativo', label: 'Ativo', type: 'boolean', booleanFalse: 'Não', booleanTrue: 'Sim', gridColumns: 6 },
    { property: 'nivelDeAcesso', label: 'Nível de acesso', filter: true, duplicate: true, options: this.cityOptions, gridColumns: 12 }
  ];

}
