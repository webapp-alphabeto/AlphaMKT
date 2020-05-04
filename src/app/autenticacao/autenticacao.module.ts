import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './login/login.component';
import { PortinariModule } from '../portinari/portinari.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PortinariModule,
    AutenticacaoRoutingModule
  ]
})
export class AutenticacaoModule { }
