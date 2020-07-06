import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VirtualStockRoutingModule } from "./virtual-stock-routing.module";
import { VirtualStockViewComponent } from "./virtual-stock-view/virtual-stock-view.component";
import { PortinariModule } from "src/app/portinari/portinari.module";
import { FormsModule } from "@angular/forms";
import { FilterByReferencePipe } from "./pipe/filter-by-reference.pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenApiService } from "src/app/core/interceptors/token-api.service";
import { InvalidTokenApiService } from "src/app/core/interceptors/invalid-token-api.service";
import { TableSizesComponent } from './virtual-stock-view/table-sizes/table-sizes.component';

@NgModule({
  declarations: [
    VirtualStockViewComponent,
    FilterByReferencePipe,
    TableSizesComponent
  ],
  imports: [
    CommonModule,
    VirtualStockRoutingModule,
    FormsModule,
    PortinariModule,
    NgxPaginationModule,
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
export class VirtualStockModule {}
