import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';


const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario-new', component: UsuarioEditComponent },
  { path: 'usuario-edit/:id', component: UsuarioEditComponent },

  { path: '', pathMatch: 'full', redirectTo: 'usuario' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
