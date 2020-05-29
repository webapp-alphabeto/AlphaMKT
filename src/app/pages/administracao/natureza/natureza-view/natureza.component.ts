import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-natureza',
  templateUrl: './natureza.component.html',
  styleUrls: ['./natureza.component.css']
})
export class NaturezaComponent implements OnInit {

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
    { property: 'nome', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'ativo', label: 'Ativo', filter: true, type: 'boolean', booleanFalse: 'Não', booleanTrue: 'Sim', gridColumns: 6 }
  ];

}
