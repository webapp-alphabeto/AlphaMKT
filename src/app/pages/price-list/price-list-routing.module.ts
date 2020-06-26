import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PriceListViewComponent } from "./price-list-view/price-list-view.component";

const routes: Routes = [
  { path: "", component: PriceListViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceListRoutingModule {}
