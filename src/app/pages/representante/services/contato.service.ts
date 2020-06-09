import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contato } from "../interfaces/imy-client";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContatoService {
  constructor(private httpClient: HttpClient) {}

  get(clientId: number): Observable<Contato[]> {
    const url = `${environment.serviceApi}area-do-representante/contatos/${clientId}`;
    return this.httpClient.get<Contato[]>(url);
  }

  post(contato: Contato): Observable<any> {
    const url = `${environment.serviceApi}area-do-representante/contatos`;
    return this.httpClient.post<any>(url, contato);
  }

  put(contato: Contato): Observable<any> {
    const url = `${environment.serviceApi}area-do-representante/contatos/${contato.id}`;
    return this.httpClient.put<any>(url, contato);
  }

  delete(id: number): Observable<any> {
    const url = `${environment.serviceApi}area-do-representante/contatos/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
