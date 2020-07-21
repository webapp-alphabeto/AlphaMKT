import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'check-in', component: CheckInComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product/:opportunityId/:reference', component: ProductComponent },
  { path: '', pathMatch: 'full', redirectTo: 'check-in' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
