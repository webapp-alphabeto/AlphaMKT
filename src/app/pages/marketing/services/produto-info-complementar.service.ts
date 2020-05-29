import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SCREEN_LOCK, environment } from 'src/environments/environment';
import { ProdutoInfoComplementar } from '../interfaces/produto-info-complementar';

@Injectable({
  providedIn: 'root'
})
export class ProdutoInfoComplementarService {

  constructor(private http: HttpClient) { }

  getByReferencia(referencia: string): Observable<ProdutoInfoComplementar> {
    const url = `${environment.serviceApi}produto-complemento/${referencia}`
    return this.http.get<ProdutoInfoComplementar>(url, { headers: SCREEN_LOCK });
  }
  
  incluirInfoComplementarProduto(produto: ProdutoInfoComplementar): Observable<any> {
    const url = `${environment.serviceApi}produto-complemento`
    return this.http.post<any>(url, produto);
  }

  atualizarInfoComplementarProduto(produto: ProdutoInfoComplementar): Observable<any> {
    const url = `${environment.serviceApi}produto-complemento/${produto.id}`
    return this.http.put<any>(url, produto);
  }

}
