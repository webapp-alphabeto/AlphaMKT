import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PortinariModule } from '../portinari/portinari.module';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';


@NgModule({
  declarations: [UsuarioComponent, UsuarioEditComponent],
  imports: [
    CommonModule,
    AdministracaoRoutingModule,
    PortinariModule,    
  ]
})
export class AdministracaoModule { }
