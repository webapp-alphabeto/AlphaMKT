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
import { IProductPhotoFilter } from "src/app/pages/marketing/interfaces/iproduct-photo-filter";
import { IProductView } from "src/app/pages/marketing/interfaces/iproduct-view";
import { ProductEditComponent } from "../product-edit/product-edit.component";
import { UtilProdutoService } from "src/app/shared/services/util-produto.service";
import { ProductPhotoService } from "src/app/pages/marketing/services/product-photo.service";
import { HttpErrorResponse } from "@angular/common/http";
import { IArrayForVirtualSdk } from "src/app/pages/marketing/interfaces/iarray-for-virtual-sdk";
import { IApresentacaoButtons } from "src/app/shared/interfaces/iapresentacao-buttons";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  @ViewChild("advancedFilter", { static: true })
  advancedFilterModal: PoModalComponent;
  @ViewChild("productEditModal", { static: true })
  productEditModal: PoModalComponent;
  @ViewChild(ProductEditComponent, { static: true })
  productEditComponent: ProductEditComponent;
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
        this.selectedCollection,
        this.selectedMap,
        this.selectedReference,
      ];
      this.filterAction(filters);
    },
    label: "Aplicar",
  };

  public readonly poPageFilter: PoPageFilter = {
    action: "filterAction",
    advancedAction: () => {
      this.advancedFilterModal.open();
    },
    ngModel: "selectedReference",
    placeholder: "Referência",
  };

  public readonly saveProduct: PoModalAction = {
    action: () => {
      this.productEditModal.close();
      this.productEditComponent
        .updateComplementaryProductInformation()
        .subscribe((x) => {
          this.getProducts();
        });
    },
    label: "Salvar",
  };

  buttons: IApresentacaoButtons[] = [
    {
      buttonAction: () => {
        this.advancedFilterModal.open();
      },
      buttonIcon: "po-icon po-icon-search",
      buttonLabel: "Pesquisar produtos",
    },
  ];

  productPhotos = [] as IProductView[];
  disclaimerGroup: PoDisclaimerGroup;
  filter = {} as IProductPhotoFilter;
  private disclaimers = [] as PoDisclaimer[];

  titleProductEditModal: string;
  selectedCollection: string;
  selectedMap: string;

  serviceApiCollection = `${environment.serviceApi}util/produto/colecao`;
  serviceApiMap = `${environment.serviceApi}util/produto/mapa`;

  selectedReference: string = "";
  progressStatus = PoProgressStatus.Default;
  messageError: string;
  showOnlyProductsWhithoutPhotos = false;
  showOnlyProductsWhithoutCover = false;
  showOnlyProductWhithourFeature = false;

  constructor(
    private productPhotoService: ProductPhotoService,
    private router: Router,
    private utilProductService: UtilProdutoService
  ) {}

  ngOnInit() {
    this.disclaimerGroup = {
      title: "Filtros",
      disclaimers: [] as PoDisclaimer[],
      change: this.onChangeDisclaimer.bind(this),
    };


  }


  getProducts() {
    this.messageError = "";
    this.productPhotoService.get(this.filter).subscribe(
      (x: IProductView[]) => {
        this.productPhotos = x;
      },
      (erro: HttpErrorResponse) => {
        this.productPhotos.length = 0;
        this.messageError = erro.error.detailedMessage;
      }
    );
  }

  filterAction(filter = [this.selectedReference]) {
    this.fillDisclaimers(filter);
    this.resetFilters();
  }

  onChangeDisclaimer(disclaimers: Array<PoDisclaimer>) {
    const selectedCollection = this.disclaimerIsFiltered(
      disclaimers,
      this.selectedCollection
    );
    const selectedMap = this.disclaimerIsFiltered(
      disclaimers,
      this.selectedMap
    );
    const selectedReference = this.disclaimerIsFiltered(
      disclaimers,
      this.selectedReference
    );

    if (!selectedCollection) this.selectedCollection = "";
    if (!selectedMap) this.selectedMap = "";
    if (!selectedReference) this.selectedReference = "";

    this.filter = {
      collection: this.selectedCollection,
      map: this.selectedMap,
      reference: this.selectedReference,
    };

    this.disclaimers = disclaimers;

    this.resetFilters();
    this.getProducts();
  }

  disclaimerIsFiltered(
    disclaimers: Array<PoDisclaimer>,
    filtro: string
  ): boolean {
    return disclaimers.map((x) => x.value).indexOf(filtro) >= 0;
  }

  fillDisclaimers(filters: Array<any>) {
    this.disclaimers = filters.map((value) => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilters() {
    const filters = this.disclaimers.map((disclaimer) => disclaimer.value);
    if (filters.length == 0) {
      this.filter = {} as IProductPhotoFilter;
      this.selectedReference = "";
      this.selectedMap = undefined;
      this.selectedCollection = undefined;
      this.disclaimers = [];
    }
  }

  openEditModal(item: IProductView) {
    const referencia = item.reference;
    this.titleProductEditModal = item.reference + " - " + item.model;
    this.productEditComponent.runQueries(referencia);
    this.productEditModal.open();
  }

  progressOfAddingPhotos(): number {
    const total = this.totalItems();
    const itens = this.totalItemsWithPhoto();
    if (total === 0) return 0;
    const result = (itens / total) * 100;
    return result;
  }

  progressIncludeCover(): number {
    const total = this.totalItems();
    const itens = this.totalItemsCover();
    if (total === 0) return 0;
    const result = (itens / total) * 100;
    return result;
  }

  progressIncludeFeature(): number {
    const total = this.totalItems();
    const itens = this.totalItemsFeature();
    if (total === 0) return 0;
    const result = (itens / total) * 100;
    return result;
  }

  totalItems(): number {
    return this.productPhotos.length;
  }

  totalItemsWithPhoto(): number {
    return this.productPhotos.filter((x) => x.numberOfImages > 0).length;
  }

  totalItemsCover(): number {
    return this.productPhotos.filter(
      (x) =>
        x.coverPhoto !==
        "https://alphastorageshared.blob.core.windows.net/imagens-de-produto/sem-foto.jpg"
    ).length;
  }

  totalItemsFeature(): number {
    return this.productPhotos.filter((x) => x.feature !== null).length;
  }

  filteredProducts(): IProductView[] {
    if (this.showOnlyProductsWhithoutPhotos)
      return this.productPhotos.filter((x) => x.numberOfImages == 0);

    if (this.showOnlyProductsWhithoutCover)
      return this.productPhotos.filter(
        (x) =>
          x.coverPhoto ==
          "https://alphastorageshared.blob.core.windows.net/imagens-de-produto/sem-foto.jpg"
      );

    if (this.showOnlyProductWhithourFeature)
      return this.productPhotos.filter((x) => x.feature == null);

    return this.productPhotos;
  }

  groupColumns(fotos: IProductView[]): IArrayForVirtualSdk<IProductView>[] {
    const newRows = [] as IArrayForVirtualSdk<IProductView>[];

    for (let index = 0; index < fotos.length; index += 4) {
      let item = {
        items: fotos.slice(index, index + 4),
      } as IArrayForVirtualSdk<IProductView>;
      newRows.push(item);
    }
    return newRows;
  }
}
