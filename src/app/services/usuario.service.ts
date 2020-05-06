import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoComboOption } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/iusuario';
import { PoPageChangePassword } from '@po-ui/ng-templates';
import { SCREEN_LOCK } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<IUsuario> {
    const url = `${environment.serviceApi}usuario/${id}`;
    return this.http.get<IUsuario>(url);
  }

  update(usuario:IUsuario):Observable<IUsuario> {
    const url =`${environment.serviceApi}usuario/${usuario.id}`;
    return this.http.put<IUsuario>(url, usuario);
  }

  alterarSenha(id: number, password: PoPageChangePassword) {
    const url = `${environment.serviceApi}usuario/alterar-senha/${id}`;
    return this.http.put<IUsuario>(url, password, { headers: SCREEN_LOCK });
  }
}
