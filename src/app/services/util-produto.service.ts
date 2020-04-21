import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoComboOption } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilProdutoService {

  constructor(private http: HttpClient) { }

  getColecoes(): Observable<PoComboOption[]> {
    const url = `${environment.serviceApi}util/produto/colecao`;
    return this.http.get<PoComboOption[]>(url);
  }

  getMapas(): Observable<PoComboOption[]> {
    const url = `${environment.serviceApi}util/produto/mapa`;
    return this.http.get<PoComboOption[]>(url);
  }
}
