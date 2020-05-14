import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';
import { PoNotificationService } from '@po-ui/ng-components';
import { NivelDeAcesso } from '../autenticacao/nivel-de-acesso.enum';



@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
  constructor(private userType: UserTypeService,
    private poNotification: PoNotificationService) { }

  canActivate(): boolean {
    const response = this.userType.nivelDeAcesso == NivelDeAcesso.Administracao;
    if (!response)
      this.poNotification.error('Não permitido');
    return response;
  }
  
}
