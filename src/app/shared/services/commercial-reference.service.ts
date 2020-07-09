import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICommercialReference } from '../models/ICommercialReference';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// TODO: Esse serviço está no lugar errado
@Injectable({
  providedIn: 'root'
})
export class CommercialReferenceService {

  constructor(private http: HttpClient) {}

  get(clientId: number): Observable<ICommercialReference[]> {
    const url = `${environment.serviceApi}shared/client/commercial-references/${clientId}`;
    return this.http.get<ICommercialReference[]>(url);
  }

  post(commercialReference: ICommercialReference): Observable<any> {
    const url = `${environment.serviceApi}shared/client/commercial-references/`;                                      
    return this.http.post<any>(url, commercialReference);
  }

  put(commercialReference: ICommercialReference): Observable<any> {
    const url = `${environment.serviceApi}shared/client/commercial-references/${commercialReference.id}`;
    return this.http.put<any>(url, commercialReference);
  }

  delete(id: number): Observable<any> {
    const url = `${environment.serviceApi}shared/client/commercial-references/${id}`;
    return this.http.delete<any>(url);
  }
}
