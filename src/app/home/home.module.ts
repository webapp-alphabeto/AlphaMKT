import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { PortinariModule } from '../portinari/portinari.module';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrincipalComponent, CardMenuComponent, MeuPerfilComponent, AlterarSenhaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PortinariModule,
    FormsModule
  ]
})
export class HomeModule { }
