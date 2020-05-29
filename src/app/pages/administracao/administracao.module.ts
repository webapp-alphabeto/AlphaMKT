import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PortinariModule } from "src/app/portinari/portinari.module";
import { AdministracaoRoutingModule } from "./administracao-routing.module";

import { UsuarioComponent } from "./usuario/usuario-view/usuario.component";
import { UsuarioEditComponent } from "./usuario/usuario-edit/usuario-edit.component";
import { GrupoDeVendasComponent } from "./grupo-de-vendas/grupo-de-vendas-view/grupo-de-vendas.component";
import { GrupoDeVendasEditComponent } from "./grupo-de-vendas/grupo-de-vendas-edit/grupo-de-vendas-edit.component";
import { NaturezaComponent } from "./natureza/natureza-view/natureza.component";
import { NaturezaEditComponent } from "./natureza/natureza-edit/natureza-edit.component";
import { CondicoesDePagamentoComponent } from "./condicoes-de-pagamento/condicoes-de-pagamento-view/condicoes-de-pagamento.component";
import { CondicoesDePagamentoEditComponent } from "./condicoes-de-pagamento/condicoes-de-pagamento-edit/condicoes-de-pagamento-edit.component";
import { MonitorDeIntegracaoComponent } from "./monitor-de-integracao/monitor-de-integracao.component";
import { RepresentanteComponent } from "./representante/representante-view/representante.component";
import { RepresentanteEditComponent } from "./representante/representante-edit/representante-edit.component";
import { ClienteComponent } from "./cliente/cliente-view/cliente.component";
import { ClienteEditComponent } from "./cliente/cliente-edit/cliente-edit.component";

import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioEditComponent,
    GrupoDeVendasComponent,
    GrupoDeVendasEditComponent,
    NaturezaComponent,
    NaturezaEditComponent,
    CondicoesDePagamentoComponent,
    CondicoesDePagamentoEditComponent,
    MonitorDeIntegracaoComponent,
    RepresentanteComponent,
    RepresentanteEditComponent,
    ClienteComponent,
    ClienteEditComponent,
  ],
  imports: [CommonModule, AdministracaoRoutingModule, PortinariModule],
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
export class AdministracaoModule {}
