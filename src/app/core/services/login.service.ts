import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PoPageLogin } from '@po-ui/ng-templates';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logar(login: PoPageLogin): Observable<{ token: string }> {
    const url = `${environment.serviceApi}login`;
    return this.http.post<{ token: string }>(url, login);
  }
}
