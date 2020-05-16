import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentanteRoutingModule } from './representante-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    HomeModule
  ]
})
export class RepresentanteModule { }
