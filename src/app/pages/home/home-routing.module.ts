import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasswordComponent } from './my-profile/change-password/change-password.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'meu-perfil', component: MyProfileComponent },
  { path: 'alterar-senha', component: ChangePasswordComponent },
  { path: '', pathMatch: 'full', redirectTo: 'principal' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
