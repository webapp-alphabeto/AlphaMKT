import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BannersComponent } from './banners/banners.component';
import { VitrinevivaComponent } from './Vitrineviva/vitrineviva.component';

const routes: Routes = [
  { path: 'produtos', component: ProductsComponent },
  { path: 'banners', component: BannersComponent },
  { path: 'vitrineviva', component: VitrinevivaComponent }, // Corrigido aqui
  { path: '', pathMatch: 'full', redirectTo: 'produtos' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
