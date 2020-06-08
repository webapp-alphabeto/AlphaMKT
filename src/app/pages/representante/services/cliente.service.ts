import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment, SCREEN_LOCK } from "src/environments/environment";
import { IRepresentanteClienteEdit } from "../interfaces/irepresentante-cliente-edit";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  get(cnpj: string, representanteId: number): Observable<any> {
    const url = `${environment.serviceApi}novo-cliente/${cnpj}/${representanteId}`;
    return this.http.get<any>(url, { headers: SCREEN_LOCK });
  }

  add(
    cliente: IRepresentanteClienteEdit
  ): Observable<IRepresentanteClienteEdit> {
    const url = `${environment.serviceApi}novo-cliente/incluir`;
    return this.http.post<IRepresentanteClienteEdit>(url, cliente, {
      headers: SCREEN_LOCK,
    });
  }
}
