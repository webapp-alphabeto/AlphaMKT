import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-payment-terms-edit',
  templateUrl: './payment-terms-edit.component.html',
  styleUrls: ['./payment-terms-edit.component.css']
})
export class PaymentTermsEditComponent implements OnInit {


  public readonly serviceApi = `${environment.serviceApi}condicoes-de-pagamento`;

  public readonly actions: PoPageDynamicEditActions = {
    save: 'administracao/condicoes-de-pagamento'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Grupo de vendas', link: '/administracao/condicoes-de-pagamento' },
      { label: 'Editar condição de pagamento' }
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
