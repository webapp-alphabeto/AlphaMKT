import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { PortinariModule } from '../portinari/portinari.module';
import { FormsModule } from '@angular/forms';
import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenApiService } from '../interceptors/token-api.service';
import { InvalidTokenApiService } from '../interceptors/invalid-token-api.service';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';


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
    VirtualScrollerModule,
    MarketingRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true
    }
  ],
})
export class MarketingModule { }
