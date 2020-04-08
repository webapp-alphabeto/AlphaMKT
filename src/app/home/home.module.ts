import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { PortinariModule } from '../portinari/portinari.module';
import { CardMenuComponent } from './card-menu/card-menu.component';

@NgModule({
  declarations: [PrincipalComponent, CardMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PortinariModule
  ]
})
export class HomeModule { }
