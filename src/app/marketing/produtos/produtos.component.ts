import { Component, OnInit, ViewChild } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoTableColumn, PoMultiselectOption, PoCheckboxGroupOption, PoModalAction, PoModalComponent, PoNotificationService, PoDialogService, PoPageFilter, PoProgressStatus, PoTableAction } from '@portinari/portinari-ui';
import { ProdutoFotoService } from 'src/app/services/produto-foto.service';
import { Router } from '@angular/router';
import { FotoProdutoFiltro } from 'src/app/interfaces/foto-produto-filtro';
import { FotoProdutoView } from 'src/app/interfaces/foto-produto-view';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  providers: [ProdutoFotoService],
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  @ViewChild('filtroAvancado', { static: true }) advancedFilterModal: PoModalComponent;

  fotosProdutos: FotoProdutoView[];

  constructor(
    private produtoFotoService: ProdutoFotoService,
    private router: Router,
    private poNotification: PoNotificationService) { }

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filtros',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this)
    };

    this.produtos = this.produtoFotoService.getItems();
    this.colecoes = this.produtoFotoService.getColecoes();
    this.mapas = this.produtoFotoService.getMapas();


    this.produtosFiltrados = [...this.produtos];

    this.getProdutos();
  }

  getProdutos() {
    const filtro = {
      colecao: 'INVERNO 2020',
      mapa: 'FEVEREIRO',

    } as FotoProdutoFiltro;

    this.produtoFotoService.get(filtro).subscribe(
      (x: FotoProdutoView[]) => { this.fotosProdutos = x; console.log(x) }
    );
  }

  disclaimerGroup: any;
  produtos: Array<object>;
  produtoColumns: Array<PoTableColumn> = [
    { property: 'referencia', label: 'Referência', type: 'string' },
    { property: 'modelo', label: 'Modelo', type: 'string' },
    { property: 'mapa', label: 'Mapa' },
    { property: 'colecao', label: 'Coleção' },
    { property: 'fotos', label: 'Fotos' },
    {
      property: 'descricao', label: 'Descrição', type: 'boolean', boolean: {
        trueLabel: 'Sim', falseLabel: 'Não'
      }
    },
  ];

  produtosActions: Array<PoTableAction> = [
    { label: 'Editar', action: () => { this.poNotification.success('Teste') } }
  ]

  produtosFiltrados: Array<object>;

  colecoesSelecionadas: Array<string> = [];
  colecoes: Array<PoMultiselectOption>;

  mapasSelecionados: Array<string> = [];
  mapas: Array<PoMultiselectOption>;

  labelFilter: string = '';

  progressStatus = PoProgressStatus.Default;


  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', action: () => { this.router.navigate(['/']); } },
      { label: 'Marketing' }
    ]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.advancedFilterModal.close();
      const filters = [...this.colecoesSelecionadas, ...this.mapasSelecionados];
      this.filterAction(filters);
    },
    label: 'Aplicar'
  };

  public readonly configuracoesDeFiltro: PoPageFilter = {
    action: 'filterAction',
    advancedAction: 'advancedFilterActionModal',
    ngModel: 'labelFilter',
    placeholder: 'Pesquisar'
  };

  private disclaimers = [];



  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.filtrarProdutos(filters) : this.resetFilterHiringProcess();
  }

  filterAction(filter = [this.labelFilter]) {
    this.populateDisclaimers(filter);
    this.filter();
  }

  filtrarProdutos(filters) {
    this.produtosFiltrados = this.produtos.filter(item => {
      return Object.keys(item)
        .some(key => (!(item[key] instanceof Object) && this.incluirFiltros(item[key], filters)));
    });
  }

  incluirFiltros(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    this.disclaimers = filters.map(value => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.produtosFiltrados = [...this.produtos];
    this.mapasSelecionados = [];
    this.colecoesSelecionadas = [];
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
