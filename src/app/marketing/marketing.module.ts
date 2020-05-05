import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { PortinariModule } from '../portinari/portinari.module';
import { FormsModule } from '@angular/forms';
import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ProdutosComponent, 
    ProdutoViewComponent, 
    ProdutoEditComponent
  ],
  imports: [
    CommonModule,
    PortinariModule,
    FormsModule,
    ScrollingModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
