import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicGuard } from "./core/guards/basic.guard";
import { MarketingGuard } from "./core/guards/marketing.guard";
import { AdministratorGuard } from "./core/guards/administrator.guard";
import { RepresentativeGuard } from "./core/guards/representative.guard";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./core/core.module").then((m) => m.CoreModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
    canActivate: [BasicGuard],
  },
  {
    path: "marketing",
    loadChildren: () =>
      import("./pages/marketing/marketing.module").then(
        (m) => m.MarketingModule
      ),
    canActivate: [MarketingGuard],
  },
  {
    path: "administracao",
    loadChildren: () =>
      import("./pages/admin/admin.module").then((m) => m.AdministracaoModule),
    canActivate: [AdministratorGuard],
  },
  {
    path: "representante",
    loadChildren: () =>
      import("./pages/representative/representative.module").then(
        (m) => m.RepresentanteModule
      ),
    canActivate: [RepresentativeGuard],
  },
  {
    path: "oportunidade-de-venda",
    loadChildren: () =>
      import("./pages/sales-opportunity/sales-opportunity.module").then(
        (m) => m.SalesOpportunityModule
      ),
    canActivate: [AdministratorGuard],
  },

    {
      path: 'estoque-virtual', 
      loadChildren: () => import('./pages/virtual-stock/virtual-stock.module').then(
        (m) => m.VirtualStockModule),
        canActivate: [AdministratorGuard]
    },
  
  {
    path: "tabela-de-precos",
    loadChildren: () =>
      import("./pages/price-list/price-list.module").then(
        (m) => m.PriceListModule
      ),
    canActivate: [AdministratorGuard],
  },

  { path: "", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
