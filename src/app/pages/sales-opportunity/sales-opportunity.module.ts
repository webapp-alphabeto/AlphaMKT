import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalesOpportunityRoutingModule } from "./sales-opportunity-routing.module";
import { SalesOpportunityViewComponent } from "./sales-opportunity-view/sales-opportunity-view.component";
import { PortinariModule } from "src/app/portinari/portinari.module";
import { PoModule } from "@po-ui/ng-components";
import { SalesOpportunityEditComponent } from "./sales-opportunity-edit/sales-opportunity-edit.component";
import { FormsModule } from "@angular/forms";
import { SalesOpportunityFormComponent } from "./sales-opportunity-edit/sales-opportunity-form/sales-opportunity-form.component";
import { HttpClientModule } from "@angular/common/http";
import { LimitersToStringPipe } from './pipe/limiters-to-string.pipe';
import { SalesOpportunityClientComponent } from './sales-opportunity-edit/sales-opportunity-client/sales-opportunity-client.component';

@NgModule({
  declarations: [
    SalesOpportunityViewComponent,
    SalesOpportunityEditComponent,
    SalesOpportunityFormComponent,
    LimitersToStringPipe,
    SalesOpportunityClientComponent
  ],
  imports: [
    CommonModule,
    PortinariModule,
    PoModule,
    FormsModule,
    SalesOpportunityRoutingModule,
  ],
})
export class SalesOpportunityModule {}
