import { Injectable } from '@angular/core';
import { UserIdService } from './user-id.service';
import { USERTYPE_STORAGE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private userIdService: UserIdService) { }

  get nivelDeAcesso() {
    return localStorage.getItem(USERTYPE_STORAGE);
  }

  get IsAdministrador(): Boolean {
    return localStorage.getItem(USERTYPE_STORAGE) == 'Administrador';
  }
  /** 
   * Verificar se o usuário que está logado é o usuário que criou o conteúdo
   * Ou se é um administrador
   * @param userId Identidade do usuário que criou o conteudo
  */
  IsCriadorOrAdministrador(userId: number): Boolean {
    return this.userIdService.Id == userId || this.IsAdministrador;
  }

  set nivelDeAcesso(nivelDeAcesso: string) {
    localStorage.setItem(USERTYPE_STORAGE, nivelDeAcesso);
  }

  resetarNivelDeAcesso() {
    localStorage.removeItem(USERTYPE_STORAGE);
  }
}
