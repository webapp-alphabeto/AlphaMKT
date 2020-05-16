import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  PoBreadcrumb,
  PoModalAction,
  PoModalComponent,
  PoPageFilter,
  PoProgressStatus,
  PoComboOption,
  PoDisclaimerGroup,
  PoDisclaimer,
  PoButtonComponent,
} from "@po-ui/ng-components";

import { Router } from "@angular/router";
import { FotoProdutoFiltro } from "src/app/interfaces/foto-produto-filtro";
import { FotoProdutoInfoView } from "src/app/interfaces/foto-produto-view";
import { ProdutoEditComponent } from "../produto-edit/produto-edit.component";
import { UtilProdutoService } from "src/app/services/util-produto.service";
import { ProdutoFotoService } from "src/app/services/produto-foto.service";
import { HttpErrorResponse } from "@angular/common/http";
import { IArrayForVirtualSdk } from "src/app/interfaces/iarray-for-virtual-sdk";
import { IApresentacaoButtons } from 'src/app/interfaces/iapresentacao-buttons';

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.css"],
})
export class ProdutosComponent implements OnInit {
  @ViewChild("filtroAvancado", { static: true })
  advancedFilterModal: PoModalComponent;
  @ViewChild("produtoEditModal", { static: true })
  produtoEditModal: PoModalComponent;
  @ViewChild(ProdutoEditComponent, { static: true })
  produtoEditComponent: ProdutoEditComponent;
  @ViewChild(PoButtonComponent, { read: ElementRef, static: true })
  poButton: PoButtonComponent;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      {
        label: "Home",
        action: () => {
          this.router.navigate(["/"]);
        },
      },
      { label: "Marketing" },
    ],
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.advancedFilterModal.close();
      const filters = [
        this.colecaoSelecionada,
        this.mapaSelecionado,
        this.referenciaSelecionada,
      ];
      this.filterAction(filters);
    },
    label: "Aplicar",
  };

  public readonly configuracoesDeFiltro: PoPageFilter = {
    action: "filterAction",
    advancedAction: () => {
      this.advancedFilterModal.open();
    },
    ngModel: "referenciaSelecionada",
    placeholder: "Referência",
  };

  public readonly salvarProduto: PoModalAction = {
    action: () => {
      this.produtoEditModal.close();
      this.produtoEditComponent.atualizarInfoComplementar().subscribe((x) => {
        this.getProdutos();
      });
    },
    label: "Salvar",
  };

  buttons: IApresentacaoButtons[] = [
    {
      buttonAction: () => {
        this.advancedFilterModal.open();
      },
      buttonIcon: 'po-icon po-icon-search',
      buttonLabel: 'Pesquisar produtos',
    },
  ];

  fotosProdutos = [] as FotoProdutoInfoView[];
  colecoes: Array<PoComboOption>;
  mapas: Array<PoComboOption>;
  disclaimerGroup: PoDisclaimerGroup;
  filtro = {} as FotoProdutoFiltro;
  private disclaimers = [] as PoDisclaimer[];

  tituloProdutoEditModal: string;
  colecaoSelecionada: string;
  mapaSelecionado: string;
  referenciaSelecionada: string = "";
  progressStatus = PoProgressStatus.Default;
  mensagemDeErro: string;
  exibirSomenteProdutosSemFotos = false;
  exibirSomenteProdutosSemCapa = false;
  exibirSomenteProdutosSemCaracteristicas = false;

  constructor(
    private produtoFotoService: ProdutoFotoService,
    private router: Router,
    private utilProdutoService: UtilProdutoService
  ) {}

  ngOnInit() {
    this.disclaimerGroup = {
      title: "Filtros",
      disclaimers: [] as PoDisclaimer[],
      change: this.onChangeDisclaimer.bind(this),
    };

    this.getColecoes();
    this.getMapas();
  }

  getColecoes() {
    this.utilProdutoService.getColecoes().subscribe((x: PoComboOption[]) => {
      this.colecoes = x;
    });
  }

  getMapas() {
    this.utilProdutoService.getMapas().subscribe((x: PoComboOption[]) => {
      this.mapas = x;
    });
  }

  getProdutos() {
    this.mensagemDeErro = "";
    this.produtoFotoService.get(this.filtro).subscribe(
      (x: FotoProdutoInfoView[]) => {
        this.fotosProdutos = x;
      },
      (erro: HttpErrorResponse) => {
        this.fotosProdutos.length = 0;
        this.mensagemDeErro = erro.error.detailedMessage;
      }
    );
  }

  filterAction(filter = [this.referenciaSelecionada]) {
    this.popularDisclaimers(filter);
    this.resetarFiltros();
  }

  onChangeDisclaimer(disclaimers: Array<PoDisclaimer>) {
    const colecaoSelecionado = this.disclaimerContemFiltro(
      disclaimers,
      this.colecaoSelecionada
    );
    const mapaSelecionado = this.disclaimerContemFiltro(
      disclaimers,
      this.mapaSelecionado
    );
    const referenciaSelecionada = this.disclaimerContemFiltro(
      disclaimers,
      this.referenciaSelecionada
    );

    if (!colecaoSelecionado) this.colecaoSelecionada = "";
    if (!mapaSelecionado) this.mapaSelecionado = "";
    if (!referenciaSelecionada) this.referenciaSelecionada = "";

    this.filtro = {
      colecao: this.colecaoSelecionada,
      mapa: this.mapaSelecionado,
      referencia: this.referenciaSelecionada,
    };

    this.disclaimers = disclaimers;

    this.resetarFiltros();
    this.getProdutos();
  }

  disclaimerContemFiltro(
    disclaimers: Array<PoDisclaimer>,
    filtro: string
  ): boolean {
    return disclaimers.map((x) => x.value).indexOf(filtro) >= 0;
  }

  popularDisclaimers(filters: Array<any>) {
    this.disclaimers = filters.map((value) => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetarFiltros() {
    const filters = this.disclaimers.map((disclaimer) => disclaimer.value);
    if (filters.length == 0) {
      this.filtro = {} as FotoProdutoFiltro;
      this.referenciaSelecionada = "";
      this.mapaSelecionado = undefined;
      this.colecaoSelecionada = undefined;
      this.disclaimers = [];
    }
  }

  abrirEditModal(item: FotoProdutoInfoView) {
    const referencia = item.referencia;
    this.tituloProdutoEditModal = item.referencia + " - " + item.modelo;
    this.produtoEditComponent.CarregarDados(referencia);
    this.produtoEditModal.open();
  }

  obterProgressoDaInclusaoDeFotos(): number {
    const total = this.obterTotalDeItens();
    const itens = this.obterTotalDeItensComFoto();
    if (total === 0) return 0;
    const result = (itens / total) * 100;
    return result;
  }

  obterProgressoDaInclusaoDeCapa(): number {
    const total = this.obterTotalDeItens();
    const itens = this.obterTotalDeItensComCapa();
    if (total === 0) return 0;
    const result = (itens / total) * 100;
    return result;
  }

  obterProgressoDaInclusaoDeCaracteristicas(): number {
    const total = this.obterTotalDeItens();
    const itens = this.obterTotalDeItensComCaracteristica();
    if (total === 0) return 0;
    const result = (itens / total) * 100;
    return result;
  }

  obterTotalDeItens(): number {
    return this.fotosProdutos.length;
  }

  obterTotalDeItensComFoto(): number {
    return this.fotosProdutos.filter((x) => x.quantidadeDeImagens > 0).length;
  }

  obterTotalDeItensComCapa(): number {
    return this.fotosProdutos.filter(
      (x) =>
        x.fotoDeCapa !==
        "https://alphastorageshared.blob.core.windows.net/imagens-de-produto/sem-foto.jpg"
    ).length;
  }

  obterTotalDeItensComCaracteristica(): number {
    return this.fotosProdutos.filter((x) => x.caracteristica !== null).length;
  }

  produtosFiltrados(): FotoProdutoInfoView[] {
    if (this.exibirSomenteProdutosSemFotos)
      return this.fotosProdutos.filter((x) => x.quantidadeDeImagens == 0);

    if (this.exibirSomenteProdutosSemCapa)
      return this.fotosProdutos.filter(
        (x) =>
          x.fotoDeCapa ==
          "https://alphastorageshared.blob.core.windows.net/imagens-de-produto/sem-foto.jpg"
      );

    if (this.exibirSomenteProdutosSemCaracteristicas)
      return this.fotosProdutos.filter((x) => x.caracteristica == null);

    return this.fotosProdutos;
  }

  groupColumns(
    fotos: FotoProdutoInfoView[]
  ): IArrayForVirtualSdk<FotoProdutoInfoView>[] {
    const newRows = [] as IArrayForVirtualSdk<FotoProdutoInfoView>[];

    for (let index = 0; index < fotos.length; index += 4) {
      let item = {
        items: fotos.slice(index, index + 4),
      } as IArrayForVirtualSdk<FotoProdutoInfoView>;
      newRows.push(item);
    }
    return newRows;
  }
}
