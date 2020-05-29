import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicGuard } from './core/guards/basic.guard';
import { MarketingGuard } from './core/guards/marketing.guard';
import { AdministradorGuard } from './core/guards/administrador.guard';
import { RepresentanteGuard } from './core/guards/representante.guard';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./core/core.module").then(
        (m) => m.CoreModule
      ),
  },
  {
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
    canActivate: [BasicGuard],
  },
  {
    path: "marketing",
    loadChildren: () =>
      import("./pages/marketing/marketing.module").then((m) => m.MarketingModule),
    canActivate: [MarketingGuard],
  },
  {
    path: "administracao",
    loadChildren: () =>
      import("./pages/administracao/administracao.module").then(
        (m) => m.AdministracaoModule
      ),
    canActivate: [AdministradorGuard],
  },

  {
    path: "representante",
    loadChildren: () =>
      import("./pages/representante/representante.module").then(
        (m) => m.RepresentanteModule
      ),
      canActivate:[ RepresentanteGuard],      
  },

  { path: "", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
