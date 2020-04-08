import { Component, OnInit, ViewChild } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoTableColumn, PoMultiselectOption, PoCheckboxGroupOption, PoModalAction, PoModalComponent, PoNotificationService, PoDialogService, PoPageFilter } from '@portinari/portinari-ui';
import { ProdutoFotoService } from 'src/app/services/produto-foto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  providers: [ProdutoFotoService],
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;

  colecoesSelecionadas: Array<string> = [];
  colecoes: Array<PoMultiselectOption>;

  mapasSelecionados: Array<string> = [];
  mapas: Array<PoMultiselectOption>;

  labelFilter: string = '';


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

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;

  constructor(
    private sampleHiringProcessesService: ProdutoFotoService,
    private router: Router) { }

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filtros',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.colecoes = this.sampleHiringProcessesService.getColecoes();
    this.mapas = this.sampleHiringProcessesService.getMapas();


    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(filter = [this.labelFilter]) {
    this.populateDisclaimers(filter);
    this.filter();
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item => {
      return Object.keys(item)
        .some(key => (!(item[key] instanceof Object) && this.includeFilter(item[key], filters)));
    });
  }

  includeFilter(item, filters) {
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
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.mapasSelecionados = [];
    this.colecoesSelecionadas = [];
  }

}
