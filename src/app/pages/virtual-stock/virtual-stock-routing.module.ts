import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualStockViewComponent } from './virtual-stock-view/virtual-stock-view.component';


const routes: Routes = [
  { path: '', component: VirtualStockViewComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualStockRoutingModule { }
