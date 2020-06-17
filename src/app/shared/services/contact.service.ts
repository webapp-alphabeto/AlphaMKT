import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IContact } from 'src/app/shared/models/IContact';

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  get(clientId: number): Observable<IContact[]> {
    const url = `${environment.serviceApi}shared/client/contacts/${clientId}`;
    return this.httpClient.get<IContact[]>(url);
  }

  post(contact: IContact): Observable<any> {
    const url = `${environment.serviceApi}shared/client/contacts/`;
    return this.httpClient.post<any>(url, contact);
  }

  put(contact: IContact): Observable<any> {
    const url = `${environment.serviceApi}shared/client/contacts/${contact.id}`;
    return this.httpClient.put<any>(url, contact);
  }

  delete(id: number): Observable<any> {
    const url = `${environment.serviceApi}shared/client/contacts/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
