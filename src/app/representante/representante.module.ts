import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RepresentanteRoutingModule } from "./representante-routing.module";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "../home/home.module";
import { ClientesComponent } from "./clientes/clientes.component";
import { ClienteNovoComponent } from "./cliente-novo/cliente-novo.component";
import { PortinariModule } from "../portinari/portinari.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PoModule } from "@po-ui/ng-components";
import { ClienteInformacoesBasicasComponent } from "./cliente-novo/cliente-informacoes-basicas/cliente-informacoes-basicas.component";
import { ReferenciaComercialComponent } from './cliente-novo/referencia-comercial/referencia-comercial.component';

@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    ClienteNovoComponent,
    ClienteInformacoesBasicasComponent,
    ReferenciaComercialComponent,
  ],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    HomeModule,
    PortinariModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
  ],
})
export class RepresentanteModule {}
