
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FotoProdutoFiltro } from '../interfaces/foto-produto-filtro';
import { FotoProdutoInfoView } from '../interfaces/foto-produto-view';
import { SCREEN_LOCK } from 'src/environments/environment.prod';
import { ProdutoImagem } from '../interfaces/produto-imagem';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFotoService {

  constructor(private http: HttpClient) { }

  get(filtro: FotoProdutoFiltro): Observable<FotoProdutoInfoView[]> {
    const url = `${environment.serviceApi}foto-produto`;
    return this.http.post<FotoProdutoInfoView[]>(url, filtro, { headers: SCREEN_LOCK });
  }

  getByReferencia(referencia: string): Observable<ProdutoImagem[]> {
    const url = `${environment.serviceApi}foto-produto/${referencia}`;
    return this.http.get<ProdutoImagem[]>(url, { headers: SCREEN_LOCK });
  }

}