import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PortinariModule } from "src/app/portinari/portinari.module";
import { AdminRoutingModule } from "./admin-routing.module";

import { UsuarioComponent } from "./usuario/usuario-view/usuario.component";
import { UsuarioEditComponent } from "./usuario/usuario-edit/usuario-edit.component";
import { SalesGroupComponent } from "./sales-group/sales-group-view/sales-group.component";
import { SalesGroupEditComponent } from "./sales-group/sales-group-edit/sales-group-edit.component";
import { NatureComponent } from "./nature/nature-view/nature.component";
import { NatureEditComponent } from "./nature/nature-edit/nature-edit.component";
import { PaymentTermsComponent } from "./payment-terms/payment-terms-view/payment-terms.component";
import { PaymentTermsEditComponent } from "./payment-terms/payment-terms-edit/payment-terms-edit.component";
import { IntegrationMonitorComponent } from "./integration-monitor/integration-monitor.component";
import { RepresentanteComponent } from "./representante/representante-view/representante.component";
import { RepresentanteEditComponent } from "./representante/representante-edit/representante-edit.component";
import { ClientComponent } from "./client/client-view/client.component";
import { ClientEditComponent } from "./client/client-edit/client-edit.component";

import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioEditComponent,
    SalesGroupComponent,
    SalesGroupEditComponent,
    NatureComponent,
    NatureEditComponent,
    PaymentTermsComponent,
    PaymentTermsEditComponent,
    IntegrationMonitorComponent,
    RepresentanteComponent,
    RepresentanteEditComponent,
    ClientComponent,
    ClientEditComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, PortinariModule],
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
