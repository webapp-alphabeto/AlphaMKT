import { Injectable } from '@angular/core';
import { UserIdService } from '../../shared/services/user-id.service';
import { NIVEL_DE_ACESSO } from 'src/environments/environment';
import { NivelDeAcesso } from '../enums/nivel-de-acesso.enum';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private userIdService: UserIdService) { }

  get nivelDeAcesso(): NivelDeAcesso {
    return parseInt(localStorage.getItem(NIVEL_DE_ACESSO));
  }

  get IsAdministrador(): Boolean {
    return localStorage.getItem(NIVEL_DE_ACESSO) == 'Administrador';
  }
  /** 
   * Verificar se o usuário que está logado é o usuário que criou o conteúdo
   * Ou se é um administrador
   * @param userId Identidade do usuário que criou o conteudo
  */
  IsCriadorOrAdministrador(userId: number): Boolean {
    return this.userIdService.Id == userId || this.IsAdministrador;
  }

  set nivelDeAcesso(nivelDeAcesso: NivelDeAcesso) {
    localStorage.setItem(NIVEL_DE_ACESSO, nivelDeAcesso.toString());
  }

  resetarNivelDeAcesso() {
    localStorage.removeItem(NIVEL_DE_ACESSO);
  }
}
