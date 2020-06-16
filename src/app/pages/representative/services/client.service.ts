import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment, SCREEN_LOCK } from "src/environments/environment";
import { NewClient } from "../interfaces/NewClient";
import { DataClient } from '../interfaces/DataClient';
import { MyClientEdit } from '../interfaces/MyClientEdit';

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private http: HttpClient) {}

  get(cnpj: string, representativeId: number): Observable<DataClient> {
    const url = `${environment.serviceApi}area-do-representante/novo-cliente/${cnpj}/${representativeId}`;
    return this.http.get<DataClient>(url, { headers: SCREEN_LOCK });
  }

  getById(id: number): Observable<MyClientEdit> {
    const url = `${environment.serviceApi}representative-area/my-client/client/${id}`;
    return this.http.get<MyClientEdit>(url, { headers: SCREEN_LOCK });
  }

  add(
    client: NewClient
  ): Observable<NewClient> {
    const url = `${environment.serviceApi}area-do-representante/novo-cliente/incluir`;
    return this.http.post<NewClient>(url, client, {
      headers: SCREEN_LOCK,
    });
  }
}
