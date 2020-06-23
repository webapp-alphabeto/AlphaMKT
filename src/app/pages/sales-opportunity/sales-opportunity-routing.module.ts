import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesOpportunityViewComponent } from './sales-opportunity-view/sales-opportunity-view.component';
import { SalesOpportunityEditComponent } from './sales-opportunity-edit/sales-opportunity-edit.component';


const routes: Routes = [
  { path: '', component: SalesOpportunityViewComponent },
  { path: 'oportunidade-de-venda-novo', component: SalesOpportunityEditComponent },
  { path: 'oportunidade-de-venda-editar/:id', component: SalesOpportunityEditComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesOpportunityRoutingModule { }
