import { Component, OnInit } from '@angular/core';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environment';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-representative-edit',
  templateUrl: './representative-edit.component.html',
  styleUrls: ['./representative-edit.component.css']
})
export class RepresentativeEditComponent implements OnInit {

  public readonly serviceApi = `${environment.serviceApi}representante`;

  public readonly actions: PoPageDynamicEditActions = {
    save: 'administracao/representante'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Representante', link: '/administracao/representante' },
      { label: 'Editar representantes' }
    ]
  };


  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', key: true, required: false, visible: false },

    { property: 'fantasyName', divider: 'Dados pessoais', label: 'Nome', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'companyName', label: 'Razao Social', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'document', label: 'Cnpj', required: false, errorMessage: 'inválido', mask: '99.999.999/9999-99', gridColumns: 2 },
    { property: 'ddd', label: 'DDD', required: false, errorMessage: 'inválido', gridColumns: 1, },
    { property: 'phone', label: 'Telefone', required: false, errorMessage: 'inválido', mask: '9999-9999?9', gridColumns: 2 },
    { property: 'email', label: 'E-Mail', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'stateRegistration', label: 'Inscrição Estadual', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'municipalRegistration', label: 'Inscrição Municipal', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'coreNumber', label: 'Número do core', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'cpf', label: 'Cpf', required: false, errorMessage: 'inválido', mask: '999.999.999-99', gridColumns: 2 },
    { property: 'rg', label: 'RG', required: false, errorMessage: 'inválido', mask: '99.999.999-9', gridColumns: 2 },

    { property: 'personalCityId', divider: 'Endereço Pessoal', label: 'Cidade', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}cidades/po-combo`, gridColumns: 2 },
    { property: 'personalAddress', label: 'Endereço', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'personalNeighborhood', label: 'Bairro', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'personalZipCode', label: 'CEP', required: false, errorMessage: 'inválido', mask: '99999-999', gridColumns: 2 },
    { property: 'personalComplement', label: 'Complemento' },

    { property: 'cityId', divider: 'Endereço Empresa', label: 'Cidade', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}cidades/po-combo`, gridColumns: 2 },
    { property: 'address', label: 'Endereço', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'neighborhood', label: 'Bairro', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'zipCode', label: 'CEP', required: false, errorMessage: 'inválido', mask: '99999-999', gridColumns: 2 },
    { property: 'complement', label: 'Complemento' },
    
    { property: 'bank', divider: 'Banco', label: 'Banco', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}banco/po-combo`, gridColumns: 4 },
    { property: 'agency', label: 'Agência', mask: '9999-9', gridColumns: 3},
    { property: 'account', label: 'Conta', mask:'99.999-9', gridColumns: 3 },

    { property: 'providerProtheusId', divider: 'Sistema', label: 'Código fornecedor (protheus)', disabled: true },
    { property: 'salesManProtheusId', label: 'Código vendedor (protheus)', disabled: true },
    { property: 'deleted', type: 'boolean', booleanFalse: "Deletado", booleanTrue: "Ativo", gridColumns: 2 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
