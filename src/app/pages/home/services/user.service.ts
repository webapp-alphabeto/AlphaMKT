import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../../../shared/models/IUser';
import { PoPageChangePassword } from '@po-ui/ng-templates';
import { SCREEN_LOCK } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<IUser> {
    const url = `${environment.serviceApi}usuario/${id}`;
    return this.http.get<IUser>(url);
  }

  update(usuario:IUser):Observable<IUser> {
    const url =`${environment.serviceApi}usuario/${usuario.id}`;
    return this.http.put<IUser>(url, usuario);
  }

  changePassword(id: number, password: PoPageChangePassword) {
    const url = `${environment.serviceApi}usuario/alterar-senha/${id}`;
    return this.http.put<IUser>(url, password, { headers: SCREEN_LOCK });
  }
}
