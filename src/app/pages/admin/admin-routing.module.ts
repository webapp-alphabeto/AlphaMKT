import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client-view/client.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { RepresentanteComponent } from './representante/representante-view/representante.component';
import { RepresentanteEditComponent } from './representante/representante-edit/representante-edit.component';
import { UsuarioComponent } from './usuario/usuario-view/usuario.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { SalesGroupComponent } from './sales-group/sales-group-view/sales-group.component';
import { SalesGroupEditComponent } from './sales-group/sales-group-edit/sales-group-edit.component';
import { NaturezaComponent } from './natureza/natureza-view/natureza.component';
import { NaturezaEditComponent } from './natureza/natureza-edit/natureza-edit.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms-view/payment-terms.component';
import { PaymentTermsEditComponent } from './payment-terms/payment-terms-edit/payment-terms-edit.component';
import { IntegrationMonitorComponent } from './integration-monitor/integration-monitor.component';



const routes: Routes = [
  { path: 'cliente', component: ClientComponent },
  { path: 'cliente-new', component: ClientEditComponent },
  { path: 'cliente-edit/:id', component: ClientEditComponent },

  { path: 'representante', component: RepresentanteComponent },
  { path: 'representante-new', component: RepresentanteEditComponent },
  { path: 'representante-edit/:id', component: RepresentanteEditComponent },

  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario-new', component: UsuarioEditComponent },
  { path: 'usuario-edit/:id', component: UsuarioEditComponent },

  { path: 'grupo-de-vendas', component: SalesGroupComponent },
  { path: 'grupo-de-vendas-edit/:id', component: SalesGroupEditComponent },

  { path: 'natureza', component: NaturezaComponent },
  { path: 'natureza-edit/:id', component: NaturezaEditComponent },

  { path: 'condicoes-de-pagamento', component: PaymentTermsComponent },
  { path: 'condicoes-de-pagamento-edit/:id', component: PaymentTermsEditComponent },

  { path: 'monitor-de-integracao', component: IntegrationMonitorComponent },

  { path: '', pathMatch: 'full', redirectTo: 'usuario' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
