import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PriceListRoutingModule } from "./price-list-routing.module";
import { PriceListViewComponent } from "./price-list-view/price-list-view.component";
import { PriceListByMkupComponent } from "./price-list-by-mkup/price-list-by-mkup.component";
import { PriceListByMkupEditComponent } from "./price-list-by-mkup/price-list-by-mkup-edit/price-list-by-mkup-edit.component";
import { PriceListByReferenceComponent } from "./price-list-by-reference/price-list-by-reference.component";
import { PriceListByReferenceEditComponent } from "./price-list-by-reference/price-list-by-reference-edit/price-list-by-reference-edit.component";
import { PoModule } from "@po-ui/ng-components";
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';
import { PriceListProductPreviewComponent } from './price-list-product-preview/price-list-product-preview.component';
import { PortinariModule } from 'src/app/portinari/portinari.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterByReferencePipe } from './pipes/filter-by-reference.pipe';

@NgModule({
  declarations: [
    PriceListViewComponent,
    PriceListByMkupComponent,
    PriceListByMkupEditComponent,
    PriceListByReferenceComponent,
    PriceListByReferenceEditComponent,
    PriceListProductPreviewComponent,
    FilterByReferencePipe 
  ],
  imports: [
    CommonModule, 
    PriceListRoutingModule, 
    FormsModule, 
    PortinariModule,
    NgxPaginationModule],
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
export class PriceListModule {}
