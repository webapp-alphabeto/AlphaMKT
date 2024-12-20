import { Component, OnInit } from '@angular/core';
import { PoPageDynamicTableField, PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { PoMultiselectOption, PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-representantive',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit {

  serviceApi = `${environment.serviceApi}representante`;
  constructor() { }

  ngOnInit(): void {
  }

  public readonly actions: PoPageDynamicTableActions = {
    new: 'administracao/representante-new',
    edit: 'administracao/representante-edit/:id',
    remove: true,
    removeAll: true
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Representante' }
    ]
  };

  public readonly cityOptions: Array<PoMultiselectOption> = [
    { value: 'Administrador', label: 'Administrador' }
  ];

  public readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'fantasyName', label: 'Nome', filter: true,  },
    { property: 'document', label: 'Documento', filter: true, mask: '99.999.999/9999-99' },
    { property: 'deleted', label: 'Deletado', filter: true, type:'boolean' }

  ];

}
