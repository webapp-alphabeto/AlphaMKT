import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuard } from './guards/basic.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
  },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [BasicGuard]
  },
  {
    path: 'marketing', 
    loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule),
    canActivate: [BasicGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
