import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalesRoutingModule } from "./sales-routing.module";
import { CheckInComponent } from "./check-in/check-in.component";
import { PortinariModule } from "src/app/portinari/portinari.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenApiService } from "src/app/core/interceptors/token-api.service";
import { InvalidTokenApiService } from "src/app/core/interceptors/invalid-token-api.service";
import { CatalogComponent } from "./catalog/catalog.component";
import { AbNavbarComponent } from "./sales/ab-navbar/ab-navbar.component";
import { AbBannerComponent } from "./catalog/ab-banner/ab-banner.component";
import { AbFilterComponent } from "./catalog/ab-filter/ab-filter.component";
import { AbSideMenuComponent } from "./catalog/ab-filter/ab-side-menu/ab-side-menu.component";
import { AbFilterTitleComponent } from "./catalog/ab-filter/ab-filter-title/ab-filter-title.component";
import { AbCardProductComponent } from "./catalog/ab-card-product/ab-card-product.component";
import { AbFilterBoxComponent } from "./catalog/ab-filter/ab-filter-box/ab-filter-box.component";
import { BigTextPipe } from "./pipes/big-text.pipe";
import { AbShowcaseComponent } from "./catalog/ab-showcase/ab-showcase.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { CatalogService } from './services/catalog.service';
import { AbSearchComponent } from './catalog/ab-filter/ab-search/ab-search.component';
import { BagComponent } from './bag/bag.component';


@NgModule({
  declarations: [
    CheckInComponent,
    CatalogComponent,
    AbNavbarComponent,
    AbBannerComponent,
    AbFilterComponent,
    AbSideMenuComponent,
    AbFilterTitleComponent,
    AbCardProductComponent,
    AbFilterBoxComponent,
    BigTextPipe,
    AbShowcaseComponent,
    ProductComponent,
    SalesComponent,
    AbSearchComponent,
    BagComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    PortinariModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
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
export class SalesModule {}
