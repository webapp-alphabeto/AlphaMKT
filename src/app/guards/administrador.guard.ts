import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';
import { PoNotificationService } from '@po-ui/ng-components';



@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
  constructor(private userType: UserTypeService,
    private poNotification: PoNotificationService) { }

  canActivate(): boolean {
    const response = this.userType.nivelDeAcesso == 'Administrador';
    if (!response)
      this.poNotification.error('Não permitido');
    return response;
  }
  
}