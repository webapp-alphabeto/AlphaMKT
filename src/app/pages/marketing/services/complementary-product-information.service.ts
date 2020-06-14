import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SCREEN_LOCK, environment } from 'src/environments/environment';
import { IComplementaryProductInformation } from '../../../shared/models/IComplementaryProductInformation';

@Injectable({
  providedIn: 'root'
})
export class ComplementaryProductInformationService {

  constructor(private http: HttpClient) { }

  getByReferencia(referencia: string): Observable<IComplementaryProductInformation> {
    const url = `${environment.serviceApi}produto-complemento/${referencia}`
    return this.http.get<IComplementaryProductInformation>(url, { headers: SCREEN_LOCK });
  }
  
  incluirInfoComplementarProduto(produto: IComplementaryProductInformation): Observable<any> {
    const url = `${environment.serviceApi}produto-complemento`
    return this.http.post<any>(url, produto);
  }

  atualizarInfoComplementarProduto(produto: IComplementaryProductInformation): Observable<any> {
    const url = `${environment.serviceApi}produto-complemento/${produto.id}`
    return this.http.put<any>(url, produto);
  }

}
