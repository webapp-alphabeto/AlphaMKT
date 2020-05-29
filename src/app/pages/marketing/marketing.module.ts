import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { PortinariModule } from 'src/app/portinari/portinari.module';
import { HomeModule } from '../home/home.module';
import { PoModule } from '@po-ui/ng-components';
import { MarketingRoutingModule } from './marketing-routing.module';

import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';

import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';

@NgModule({
  declarations: [
    ProdutosComponent, 
    ProdutoViewComponent, 
    ProdutoEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    VirtualScrollerModule,
    MarketingRoutingModule,
    HomeModule,
    PortinariModule,
    PoModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true,
    },
  ],
})
export class MarketingModule { }
