import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BannersComponent } from './banners/banners.component';

const routes: Routes = [
  { path: 'produtos', component: ProductsComponent },
  { path: 'banners', component: BannersComponent },
  { path: '', pathMatch: 'full', redirectTo: 'produtos' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
