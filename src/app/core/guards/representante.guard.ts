import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserTypeService } from '../services/user-type.service';
import { PoNotificationService } from '@po-ui/ng-components';
import { NivelDeAcesso } from '../enums/nivel-de-acesso.enum';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteGuard implements CanActivate {
  constructor(private userType: UserTypeService,
    private poNotification: PoNotificationService) { }

  canActivate(): boolean {
    const response = this.userType.nivelDeAcesso == NivelDeAcesso.Representante;    
    if (!response)
      this.poNotification.error('Não permitido');
    return response;
  }
}
