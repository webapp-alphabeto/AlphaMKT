import { Component, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoPageFilter, PoProgressStatus, PoComboOption, PoDisclaimerGroup, PoDisclaimer } from '@po-ui/ng-components';

import { Router } from '@angular/router';
import { FotoProdutoFiltro } from 'src/app/interfaces/foto-produto-filtro';
import { FotoProdutoInfoView } from 'src/app/interfaces/foto-produto-view';
import { ProdutoEditComponent } from '../produto-edit/produto-edit.component';
import { UtilProdutoService } from 'src/app/services/util-produto.service';
import { ProdutoFotoService } from 'src/app/services/produto-foto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  @ViewChild('filtroAvancado', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('produtoEditModal', { static: true }) produtoEditModal: PoModalComponent;
  @ViewChild(ProdutoEditComponent, { static: true }) produtoEditComponent: ProdutoEditComponent;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', action: () => { this.router.navigate(['/']); } },
      { label: 'Marketing' }
    ]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.advancedFilterModal.close();
      const filters = [this.colecaoSelecionada, this.mapaSelecionado, this.referenciaSelecionada];
      this.filterAction(filters);
    },
    label: 'Aplicar'
  };

  public readonly configuracoesDeFiltro: PoPageFilter = {
    action: 'filterAction',
    advancedAction: () => { this.advancedFilterModal.open(); },
    ngModel: 'referenciaSelecionada',
    placeholder: 'Referência',
  };

  fotosProdutos = [] as FotoProdutoInfoView[];
  tituloProdutoEditModal: string;

  colecoes: Array<PoComboOption>;
  mapas: Array<PoComboOption>;

  disclaimerGroup: PoDisclaimerGroup;

  colecaoSelecionada: string;
  mapaSelecionado: string;
  referenciaSelecionada: string = '';

  filtro = {} as FotoProdutoFiltro;

  progressStatus = PoProgressStatus.Default;

  private disclaimers = [] as PoDisclaimer[];

  constructor(
    private produtoFotoService: ProdutoFotoService,
    private router: Router,
    private utilProdutoService: UtilProdutoService) { }

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filtros',
      disclaimers: [] as PoDisclaimer[],
      change: this.onChangeDisclaimer.bind(this),

    };

    this.getColecoes();
    this.getMapas();

  }

  getColecoes() {
    this.utilProdutoService
      .getColecoes()
      .subscribe(
        (x: PoComboOption[]) => { this.colecoes = x });
  }

  getMapas() {
    this.utilProdutoService
      .getMapas()
      .subscribe(
        (x: PoComboOption[]) => { this.mapas = x });
  }

  getProdutos() {

    this.produtoFotoService.get(this.filtro).subscribe(
      (x: FotoProdutoInfoView[]) => { this.fotosProdutos = x; },
      () => { this.fotosProdutos = []; }
    );
  }

  filterAction(filter = [this.referenciaSelecionada]) {
    this.popularDisclaimers(filter);
    this.resetarFiltros();
  }



  onChangeDisclaimer(disclaimers: Array<PoDisclaimer>) {

    const colecaoSelecionado = this.disclaimerContemFiltro(disclaimers, this.colecaoSelecionada);
    const mapaSelecionado = this.disclaimerContemFiltro(disclaimers, this.mapaSelecionado);
    const referenciaSelecionada = this.disclaimerContemFiltro(disclaimers, this.referenciaSelecionada);

    if (!colecaoSelecionado) this.colecaoSelecionada = '';
    if (!mapaSelecionado) this.mapaSelecionado = '';
    if (!referenciaSelecionada) this.referenciaSelecionada = '';

    this.filtro = {
      colecao: this.colecaoSelecionada,
      mapa: this.mapaSelecionado,
      referencia: this.referenciaSelecionada
    };

    this.disclaimers = disclaimers;


    this.resetarFiltros();
    this.getProdutos();
  }

  disclaimerContemFiltro(disclaimers: Array<PoDisclaimer>, filtro: string): boolean {
    return disclaimers
      .map(x => x.value)
      .indexOf(filtro) >= 0;
  }

  popularDisclaimers(filters: Array<any>) {
    this.disclaimers = filters.map(value => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetarFiltros() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    if (filters.length == 0) {
      this.filtro = {} as FotoProdutoFiltro;
      this.referenciaSelecionada = '';
      this.mapaSelecionado = undefined;
      this.colecaoSelecionada = undefined;
      this.disclaimers = [];
    }
  }

  abrirEditModal(item: FotoProdutoInfoView) {
    const referencia = item.referencia;
    this.tituloProdutoEditModal = referencia;
    this.produtoEditComponent.CarregarDados(referencia);
    this.produtoEditModal.open();
  }

}
