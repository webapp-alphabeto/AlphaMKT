import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalesOpportunityRoutingModule } from "./sales-opportunity-routing.module";
import { SalesOpportunityViewComponent } from "./sales-opportunity-view/sales-opportunity-view.component";
import { PortinariModule } from "src/app/portinari/portinari.module";
import { PoModule } from "@po-ui/ng-components";
import { SalesOpportunityEditComponent } from "./sales-opportunity-edit/sales-opportunity-edit.component";
import { FormsModule } from "@angular/forms";
import { SalesOpportunityFormComponent } from "./sales-opportunity-edit/sales-opportunity-form/sales-opportunity-form.component";

import { LimitersToStringPipe } from './pipe/limiters-to-string.pipe';
import { SalesOpportunityClientComponent } from './sales-opportunity-edit/sales-opportunity-client/sales-opportunity-client.component';
import { SalesOpportunityRepresentativeComponent } from './sales-opportunity-edit/sales-opportunity-representative/sales-opportunity-representative.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';
import { SalesOpportunitySalesGroupComponent } from './sales-opportunity-edit/sales-opportunity-sales-group/sales-opportunity-sales-group.component';
import { SalesOpportunityProductsComponent } from './sales-opportunity-edit/sales-opportunity-products/sales-opportunity-products.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SalesOpportunityViewComponent,
    SalesOpportunityEditComponent,
    SalesOpportunityFormComponent,
    LimitersToStringPipe,
    SalesOpportunityClientComponent,
    SalesOpportunityRepresentativeComponent,
    SalesOpportunitySalesGroupComponent,
    SalesOpportunityProductsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PortinariModule,
    PoModule,
    FormsModule,
    SalesOpportunityRoutingModule,
  ],
  providers:[
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
  ]
})
export class SalesOpportunityModule {}
