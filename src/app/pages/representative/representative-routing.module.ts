import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { ClientsComponent } from "./Components/clients/clients.component";
import { ClientNewComponent } from "./components/client-new/client-new.component";
import { ClientEditComponent } from "./components/client-edit/client-edit.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "clientes", component: ClientsComponent },
  { path: "cliente-novo", component: ClientNewComponent },
  { path: "client-edit/:id", component: ClientEditComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentativeRoutingModule {}
