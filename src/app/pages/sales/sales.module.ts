import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { CheckInComponent } from './check-in/check-in.component';
import { PortinariModule } from 'src/app/portinari/portinari.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';
import { CatalogComponent } from './catalog/catalog.component';


@NgModule({
  declarations: [CheckInComponent, CatalogComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    PortinariModule,
    FormsModule,
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
export class SalesModule { }
