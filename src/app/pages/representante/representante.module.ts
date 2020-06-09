import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PoModule } from "@po-ui/ng-components";
import { PortinariModule } from 'src/app/portinari/portinari.module';
import { HomeModule } from "../home/home.module";
import { SharedModule } from 'src/app/shared/shared.module';
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
import { ClientEditComponent } from './components/client-edit/client-edit.component';

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
    PosicaoToStringPipe,
    ClientEditComponent
  ],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    HomeModule,
    PortinariModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    SharedModule
  ],
  
})
export class RepresentanteModule {}
