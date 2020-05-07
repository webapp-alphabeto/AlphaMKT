import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PortinariModule } from '../portinari/portinari.module';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenApiService } from '../interceptors/token-api.service';
import { InvalidTokenApiService } from '../interceptors/invalid-token-api.service';
import { GrupoDeVendasComponent } from './grupo-de-vendas/grupo-de-vendas.component';
import { GrupoDeVendasEditComponent } from './grupo-de-vendas-edit/grupo-de-vendas-edit.component';
import { NaturezaComponent } from './natureza/natureza.component';
import { NaturezaEditComponent } from './natureza-edit/natureza-edit.component';


@NgModule({
  declarations: [UsuarioComponent, UsuarioEditComponent, GrupoDeVendasComponent, GrupoDeVendasEditComponent, NaturezaComponent, NaturezaEditComponent],
  imports: [
    CommonModule,
    AdministracaoRoutingModule,
    PortinariModule,    
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
export class AdministracaoModule { }
