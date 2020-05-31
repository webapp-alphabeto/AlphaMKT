import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { NivelDeAcesso } from '../enums/nivel-de-acesso.enum';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanActivate {
  constructor(private tokenService: TokenService,
    private poNotification: PoNotificationService) { }

  canActivate(): boolean {
    const response = this.tokenService.DadosDoUsuario.nivelDeAcesso == NivelDeAcesso.Cliente;
    if (!response)
      this.poNotification.error('Não permitido');
    return response;
  }
  
}
