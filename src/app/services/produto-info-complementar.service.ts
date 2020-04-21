import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoInfoComplementar } from '../interfaces/produto-info-complementar';
import { SCREEN_LOCK, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoInfoComplementarService {

  constructor(private http: HttpClient) { }

  getByReferencia(referencia: string): Observable<ProdutoInfoComplementar> {
    const url = `${environment.serviceApi}produto-complemento/${referencia}`
    return this.http.get<ProdutoInfoComplementar>(url, { headers: SCREEN_LOCK });
  }
}
