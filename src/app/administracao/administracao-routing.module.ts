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


const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario-new', component: UsuarioEditComponent },
  { path: 'usuario-edit/:id', component: UsuarioEditComponent },

  { path: 'grupo-de-vendas', component: GrupoDeVendasComponent },
  { path: 'grupo-de-vendas-edit/:id', component: GrupoDeVendasEditComponent },

  { path: 'natureza', component: NaturezaComponent },
  { path: 'natureza-edit/:id', component: NaturezaEditComponent },

  { path: 'condicoes-de-pagamento', component: CondicoesDePagamentoComponent },
  { path: 'condicoes-de-pagamento-edit/:id', component: CondicoesDePagamentoEditComponent },

  { path: '', pathMatch: 'full', redirectTo: 'usuario' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
