import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-natureza',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  serviceApi = `${environment.serviceApi}natureza`;
  constructor() { }

  ngOnInit(): void {
  }

  public readonly actions: PoPageDynamicTableActions = {

    edit: 'administracao/natureza-edit/:id',
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Natureza' }
    ]
  };

  public readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'active', label: 'Ativo', filter: true, type: 'boolean', booleanFalse: 'Não', booleanTrue: 'Sim', gridColumns: 6 }
  ];

}
