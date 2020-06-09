import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { ClientesComponent } from "./Components/clientes/clientes.component";
import { ClienteNovoComponent } from "./Components/cliente-novo/cliente-novo.component";
import { ClientEditComponent } from "./components/client-edit/client-edit.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "cliente-novo", component: ClienteNovoComponent },
  { path: "client-edit/:id", component: ClientEditComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentanteRoutingModule {}
