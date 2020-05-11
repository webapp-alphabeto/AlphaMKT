import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { GrupoDeVendasComponent } from './grupo-de-vendas/grupo-de-vendas.component';
import { GrupoDeVendasEditComponent } from './grupo-de-vendas-edit/grupo-de-vendas-edit.component';
import { NaturezaComponent } from './natureza/natureza.component';
import { NaturezaEditComponent } from './natureza-edit/natureza-edit.component';
import { CondicoesDePagamentoComponent } from './condicoes-de-pagamento/condicoes-de-pagamento.component';
import { CondicoesDePagamentoEditComponent } from './condicoes-de-pagamento-edit/condicoes-de-pagamento-edit.component';
import { MonitorDeIntegracaoComponent } from './monitor-de-integracao/monitor-de-integracao.component';
import { RepresentanteComponent } from './representante/representante.component';
import { RepresentanteEditComponent } from './representante-edit/representante-edit.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';


const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'cliente-new', component: ClienteEditComponent },
  { path: 'cliente-edit/:id', component: ClienteEditComponent },

  { path: 'representante', component: RepresentanteComponent },
  { path: 'representante-new', component: RepresentanteEditComponent },
  { path: 'representante-edit/:id', component: RepresentanteEditComponent },

  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario-new', component: UsuarioEditComponent },
  { path: 'usuario-edit/:id', component: UsuarioEditComponent },

  { path: 'grupo-de-vendas', component: GrupoDeVendasComponent },
  { path: 'grupo-de-vendas-edit/:id', component: GrupoDeVendasEditComponent },

  { path: 'natureza', component: NaturezaComponent },
  { path: 'natureza-edit/:id', component: NaturezaEditComponent },

  { path: 'condicoes-de-pagamento', component: CondicoesDePagamentoComponent },
  { path: 'condicoes-de-pagamento-edit/:id', component: CondicoesDePagamentoEditComponent },

  { path: 'monitor-de-integracao', component: MonitorDeIntegracaoComponent },

  { path: '', pathMatch: 'full', redirectTo: 'usuario' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
