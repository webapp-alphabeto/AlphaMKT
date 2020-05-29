import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'meu-perfil', component: MeuPerfilComponent },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
