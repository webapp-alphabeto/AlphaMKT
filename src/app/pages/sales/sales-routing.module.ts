import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckInComponent } from "./check-in/check-in.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { ProductComponent } from "./product/product.component";
import { SalesComponent } from "./sales/sales.component";

const routes: Routes = [
  { path: "check-in", component: CheckInComponent },
  {
    path: "",
    component: SalesComponent,
    children: [
      { path: "catalog", component: CatalogComponent },
      {
        path: "product/:bagHeadId/:reference",
        component: ProductComponent,
      },
      { path: "", pathMatch: "full", redirectTo: "catalog" },
    ],
  },
  { path: "", pathMatch: "full", redirectTo: "check-in" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
