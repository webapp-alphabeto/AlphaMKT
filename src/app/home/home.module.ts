import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { PortinariModule } from '../portinari/portinari.module';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenApiService } from '../interceptors/token-api.service';
import { InvalidTokenApiService } from '../interceptors/invalid-token-api.service';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';

@NgModule({
  declarations: [PrincipalComponent, CardMenuComponent, MeuPerfilComponent, AlterarSenhaComponent, ApresentacaoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PortinariModule,
    FormsModule
  ],
  exports: [
    ApresentacaoComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true
    }
  ]
})
export class HomeModule { }
