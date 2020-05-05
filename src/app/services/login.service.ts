import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../interfaces/ilogin-response';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(login: ILogin): Observable<ILoginResponse> {
    const url = `${environment.serviceApi}login`;
    return this.http.post<ILoginResponse>(url, login);
  }
}
