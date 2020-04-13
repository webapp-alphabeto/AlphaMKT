
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FotoProdutoFiltro } from '../interfaces/foto-produto-filtro';
import { FotoProdutoView } from '../interfaces/foto-produto-view';
import { SCREEN_LOCK } from 'src/environments/environment.prod';

@Injectable()
export class ProdutoFotoService {

  constructor(private http: HttpClient) { }

  get(filtro: FotoProdutoFiltro): Observable<FotoProdutoView[]> {
    const url = `${environment.serviceApi}foto-produto`;
    return this.http.post<FotoProdutoView[]>(url, filtro, { headers: SCREEN_LOCK });
  }

  getItems() {
    return [
      { mapa: 'JULHO', fotos: 1, colecao: 'INVERNO 2020', referencia: '51001', modelo: 'Short', descricao: true },
      { mapa: 'JULHO', fotos: 2, colecao: 'INVERNO 2020', referencia: '51002', modelo: 'Camisa', descricao: false },
      { mapa: 'AGOSTO', fotos: 3, colecao: 'INVERNO 2020', referencia: '51003', modelo: 'Blusa', descricao: true },
      { mapa: 'AGOSTO', fotos: 3, colecao: 'INVERNO 2020', referencia: '51004', modelo: 'Calça', descricao: true },
      { mapa: 'AGOSTO', fotos: 4, colecao: 'INVERNO 2020', referencia: '51005', modelo: 'Cueca', descricao: true },
      { mapa: 'SETEMBRO', fotos: 5, colecao: 'VERAO 2020', referencia: '51006', modelo: 'Chapéu', descricao: true },
      { mapa: 'SETEMBRO', fotos: 1, colecao: 'VERAO 2020', referencia: '51007', modelo: 'Boneca', descricao: true },
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