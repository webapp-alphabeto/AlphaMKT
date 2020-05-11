import { Component, OnInit } from '@angular/core';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environment';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-representante-edit',
  templateUrl: './representante-edit.component.html',
  styleUrls: ['./representante-edit.component.css']
})
export class RepresentanteEditComponent implements OnInit {

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

    { property: 'nomeFantasia', divider: 'Dados pessoais', label: 'Nome', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'razaoSocial', label: 'Razao Social', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'documento', label: 'Cnpj', required: false, errorMessage: 'inválido', mask: '99.999.999/9999-99', gridColumns: 2 },
    { property: 'ddd', label: 'DDD', required: false, errorMessage: 'inválido', gridColumns: 1, },
    { property: 'telefone', label: 'Telefone', required: false, errorMessage: 'inválido', mask: '9999-9999?9', gridColumns: 2 },
    { property: 'email', label: 'E-Mail', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'inscricaoEstadual', label: 'Inscrição Estadual', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'inscricaoMunicipal', label: 'Inscrição Municipal', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'numeroDoCore', label: 'Número do core', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'cpf', label: 'Cpf', required: false, errorMessage: 'inválido', mask: '999.999.999-99', gridColumns: 2 },
    { property: 'rg', label: 'RG', required: false, errorMessage: 'inválido', mask: '99.999.999-9', gridColumns: 2 },

    { property: 'cidadePessoalId', divider: 'Endereço Pessoal', label: 'Cidade', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}cidades/po-combo`, gridColumns: 2 },
    { property: 'enderecoPessoal', label: 'Endereço', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'bairroPessoal', label: 'Bairro', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'cepPessoal', label: 'CEP', required: false, errorMessage: 'inválido', mask: '99999-999', gridColumns: 2 },
    { property: 'complementoPessoal', label: 'Complemento' },

    { property: 'cidadeId', divider: 'Endereço Empresa', label: 'Cidade', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}cidades/po-combo`, gridColumns: 2 },
    { property: 'endereco', label: 'Endereço', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'bairro', label: 'Bairro', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'cep', label: 'CEP', required: false, errorMessage: 'inválido', mask: '99999-999', gridColumns: 2 },
    { property: 'complemento', label: 'Complemento' },
    
    { property: 'banco', divider: 'Banco', label: 'Banco', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}banco/po-combo`, gridColumns: 4 },
    { property: 'agencia', label: 'Agência', mask: '9999-9', gridColumns: 3},
    { property: 'conta', label: 'Conta', mask:'99.999-9', gridColumns: 3 },

    { property: 'fornecedorProtheusId', divider: 'Sistema', label: 'Código fornecedor (protheus)', disabled: true },
    { property: 'vendedorProtheusId', label: 'Código vendedor (protheus)', disabled: true },
    { property: 'deletado', type: 'boolean', booleanFalse: "Deletado", booleanTrue: "Ativo", gridColumns: 2 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
