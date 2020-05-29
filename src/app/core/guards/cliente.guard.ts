import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';
import { PoNotificationService } from '@po-ui/ng-components';
import { NivelDeAcesso } from '../enums/nivel-de-acesso.enum';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanActivate {
  constructor(private userType: UserTypeService,
    private poNotification: PoNotificationService) { }

  canActivate(): boolean {
    const response = this.userType.nivelDeAcesso == NivelDeAcesso.Cliente;
    if (!response)
      this.poNotification.error('Não permitido');
    return response;
  }
  
}
