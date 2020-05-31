import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { PortinariModule } from 'src/app/portinari/portinari.module';
import { HomeRoutingModule } from "./home-routing.module";

import { PrincipalComponent } from "./principal/principal.component";
import { CardMenuComponent } from "./card-menu/card-menu.component";
import { MeuPerfilComponent } from "./meu-perfil/meu-perfil.component";
import { AlterarSenhaComponent } from "./alterar-senha/alterar-senha.component";
import { ApresentacaoComponent } from "./apresentacao/apresentacao.component";

import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';

@NgModule({
  declarations: [
    PrincipalComponent,
    CardMenuComponent,
    MeuPerfilComponent,
    AlterarSenhaComponent,
    ApresentacaoComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, PortinariModule, FormsModule],
  exports: [ApresentacaoComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true,
    },
  ],
})
export class HomeModule {}