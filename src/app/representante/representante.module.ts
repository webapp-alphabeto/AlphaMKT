import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PortinariModule } from "../portinari/portinari.module";
import { PoModule } from "@po-ui/ng-components";

import { HomeModule } from "../home/home.module";
import { RepresentanteRoutingModule } from "./representante-routing.module";

import { HomeComponent } from "./Components/home/home.component";
import { ClientesComponent } from "./Components/clientes/clientes.component";
import { ClienteNovoComponent } from "./Components/cliente-novo/cliente-novo.component";
import { ClienteInformacoesBasicasComponent } from "./Components/cliente-novo/cliente-informacoes-basicas/cliente-informacoes-basicas.component";
import { ReferenciaComercialComponent } from "./Components/cliente-novo/referencia-comercial/referencia-comercial.component";
import { FotosDoPontoComponent } from "./Components/cliente-novo/fotos-do-ponto/fotos-do-ponto.component";

@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    ClienteNovoComponent,
    ClienteInformacoesBasicasComponent,
    ReferenciaComercialComponent,
    FotosDoPontoComponent,
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
