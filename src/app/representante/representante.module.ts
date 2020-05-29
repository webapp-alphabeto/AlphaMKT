import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PortinariModule } from "../portinari/portinari.module";
import { PoModule } from "@po-ui/ng-components";

import { NgxMaskModule, IConfig } from 'ngx-mask'
const maskConfig: Partial<IConfig> = {
  validation: false,
};


import { HomeModule } from "../home/home.module";
import { RepresentanteRoutingModule } from "./representante-routing.module";

import { HomeComponent } from "./Components/home/home.component";
import { ClientesComponent } from "./Components/clientes/clientes.component";
import { ClienteNovoComponent } from "./Components/cliente-novo/cliente-novo.component";
import { ClienteInformacoesBasicasComponent } from "./Components/cliente-novo/cliente-informacoes-basicas/cliente-informacoes-basicas.component";
import { ReferenciaComercialComponent } from "./Components/cliente-novo/referencia-comercial/referencia-comercial.component";
import { FotosDoPontoComponent } from "./Components/cliente-novo/fotos-do-ponto/fotos-do-ponto.component";
import { ContatosComponent } from './Components/cliente-novo/contatos/contatos.component';
import { RevisaoComponent } from './Components/cliente-novo/revisao/revisao.component';
import { PosicaoToStringPipe } from './pipe/posicao-to-string.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    ClienteNovoComponent,
    ClienteInformacoesBasicasComponent,
    ReferenciaComercialComponent,
    FotosDoPontoComponent,
    ContatosComponent,
    RevisaoComponent,
    PosicaoToStringPipe
  ],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    HomeModule,
    PortinariModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})
export class RepresentanteModule {}
