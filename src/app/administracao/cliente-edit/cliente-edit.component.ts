import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PoPageDynamicEditActions, PoPageDynamicEditComponent } from '@po-ui/ng-templates';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  @ViewChild('cliente', { static: true }) clienteEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = `${environment.serviceApi}cliente`;

  public readonly actions: PoPageDynamicEditActions = {
    save: 'administracao/cliente'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Cliente', link: '/administracao/cliente' },
      { label: 'Editar clientes' }
    ]
  };


  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', key: true, required: false, visible: false },

    { property: 'nomeFantasia', divider: 'Dados pessoais', label: 'Nome', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'razaoSocial', label: 'Razao Social', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'documento', label: 'Documento', required: false, errorMessage: 'inválido', mask: '99.999.999/9999-99', gridColumns: 2 },
    { property: 'ddd', label: 'DDD', required: false, errorMessage: 'inválido', gridColumns: 1, },
    { property: 'telefone', label: 'Telefone', required: false, errorMessage: 'inválido', mask: '9999-9999?9', gridColumns: 2 },
    { property: 'email', label: 'E-Mail', required: false, errorMessage: 'inválido', gridColumns: 3 },
    { property: 'inscricaoEstadual', label: 'Inscrição Estadual', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'inscricaoMunicipal', label: 'Inscrição Municipal', required: false, errorMessage: 'inválido', gridColumns: 2 },

    { property: 'cidadeId', divider: 'Endereço', label: 'Cidade', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}cidades/po-combo`, gridColumns: 2 },
    { property: 'endereco', label: 'Endereço', required: false, errorMessage: 'inválido', gridColumns: 4 },
    { property: 'bairro', label: 'Bairro', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'cep', label: 'CEP', required: false, errorMessage: 'inválido', mask: '99999-999', gridColumns: 2 },
    { property: 'complemento', label: 'Complemento' },

    { property: 'representanteId', divider: 'Informações comerciais', label: 'Representante', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}representante/po-combo`, gridColumns: 2 },
    { property: 'naturezaId', label: 'Natureza', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}natureza/po-combo`, gridColumns: 3 },                 
    { property: 'grupoDeVendaId', label: 'Grupo de venda', required: false, errorMessage: 'inválido', optionsService: `${environment.serviceApi}grupo-de-vendas/po-combo`, gridColumns: 2 },
    
    { property: 'contato', label: 'Contato', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'suframa', label: 'Suframa', required: false, errorMessage: 'inválido', gridColumns: 2 },
    { property: 'limiteDeCredito', label: 'Limite de crédito', type: 'currency', required: false, errorMessage: 'inválido', gridColumns: 2, disabled: true },
    
    { property: 'avaliacao', label: 'Avaliação', required: false, errorMessage: 'inválido', gridColumns: 12, rows: 4 },

    { property: 'protheusId', divider: 'Sistema', label: 'Código cliente (protheus)', disabled: true },
    { property: 'representanteVendedorProtheusId', label: 'Código vendedor (protheus)', disabled: true },
    { property: 'deletado', type: 'boolean', booleanFalse: "Deletado", booleanTrue: "Ativo", gridColumns: 2 },
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
