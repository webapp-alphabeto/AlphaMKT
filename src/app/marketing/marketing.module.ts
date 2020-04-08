import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { PortinariModule } from '../portinari/portinari.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    PortinariModule,
    FormsModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
