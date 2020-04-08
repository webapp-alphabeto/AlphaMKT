
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@portinari/portinari-ui';

@Injectable()
export class ProdutoFotoService {

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'hireStatus', label: 'Status', type: 'subtitle', subtitles: [
        { value: 'hired', color: 'success', label: 'Hired', content: '1' },
        { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
        { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
      ]},
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'mapa', label: 'Mapa'},
      { property: 'colecao', label: 'Coleção' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }


  getItems() {
    return [
      { hireStatus: 'hired', mapa: 'JULHO', city: 'Ontario', colecao: 'INVERNO 2020', idCard: 'AB34lxi90', jobDescription: 'Systems Analyst' },
      { hireStatus: 'progress', mapa: 'JULHO', city: 'Buffalo', colecao: 'INVERNO 2020', idCard: 'HG56lds54', jobDescription: 'Trainee' },
      { hireStatus: 'canceled', mapa: 'JULHO', city: 'Albany', colecao: 'INVERNO 2020', idCard: 'DF23cfr65', jobDescription: 'Programmer' },
      { hireStatus: 'hired', mapa: 'AGOSTO', city: 'New York', colecao: 'INVERNO 2020', idCard: 'GF45fgh34', jobDescription: 'Web developer' },
      { hireStatus: 'hired', mapa: 'AGOSTO', city: 'Ontario', colecao: 'INVERNO 2020', idCard: 'RF76jut21', jobDescription: 'Recruiter' },
      { hireStatus: 'progress', mapa: 'AGOSTO', city: 'Utica', colecao: 'INVERNO 2020', idCard: 'HY21kgu65', jobDescription: 'Consultant' },
      { hireStatus: 'hired', mapa: 'SETEMBRO', city: 'Ontario', colecao: 'VERAO 2020', idCard: 'UL78flg68', jobDescription: 'DBA' },
      { hireStatus: 'progress', mapa: 'SETEMBRO', city: 'Albany', colecao: 'VERAO 2020', idCard: 'JH12oli98', jobDescription: 'Programmer' },
    ];
  }

  getColecoes() {
    return [
      { value: 'INVERNO 2020', label: 'INVERNO 2020' },
      { value: 'VERAO 2020', label: 'VERAO 2020' }
    ];
  }

  getMapas() {
    return [
      { value: 'JULHO', label: 'JULHO' },
      { value: 'AGOSTO', label: 'AGOSTO' },
      { value: 'SETEMBRO', label: 'SETEMBRO' }
    ];
  }

}