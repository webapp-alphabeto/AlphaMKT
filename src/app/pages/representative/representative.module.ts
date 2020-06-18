import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PoModule } from "@po-ui/ng-components";
import { PortinariModule } from "src/app/portinari/portinari.module";
import { HomeModule } from "../home/home.module";
import { SharedModule } from "src/app/shared/shared.module";
import { RepresentativeRoutingModule } from "./representative-routing.module";

import { HomeComponent } from "./Components/home/home.component";
import { ClientsComponent } from "./Components/clients/clients.component";

import { PositionToStringPipe } from "./pipe/position-to-string.pipe";
import { ClientEditComponent } from "./components/client-edit/client-edit.component";
import { ClientEditContactsComponent } from "./components/client-edit/client-edit-contacts/client-edit-contacts.component";
import { ClientEditContactsEditComponent } from "./components/client-edit/client-edit-contacts/client-edit-contacts-edit/clients-edit-contacts-edit.component";
import { ClientEditFormComponent } from "./components/client-edit/client-edit-form/client-edit-form.component";
import { ClientEditCommercialReferencesComponent } from "./components/client-edit/client-edit-commercial-references/client-edit-commercial-references.component";
import { ClientEditStorePicturesComponent } from "./components/client-edit/client-edit-store-pictures/client-edit-store-pictures.component";
import { ClientNewCommercialReferencesComponent } from "./components/client-new/client-new-commercial-references/client-new-commercial-references.component";
import { ClientNewContactsComponent } from "./components/client-new/client-new-contacts/client-new-contacts.component";
import { ClientNewFormComponent } from "./components/client-new/client-new-form/client-new-form.component";
import { ClientNewStorePicturesComponent } from "./components/client-new/client-new-store-pictures/client-new-store-pictures.component";
import { ReviewComponent } from "./components/client-new/review/review.component";
import { ClientNewComponent } from "./components/client-new/client-new.component";
import { ClientEditCommercialReferencesEditComponent } from './components/client-edit/client-edit-commercial-references/commercial-references-edit/client-edit-commercial-references-edit.component';
import { ClientEditStorePicturesEditComponent } from './components/client-edit/client-edit-store-pictures/client-edit-store-pictures-edit/client-edit-store-pictures-edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    ClientsComponent,
    PositionToStringPipe,
    ClientEditComponent,
    ClientEditContactsComponent,
    ClientEditContactsEditComponent,
    ClientEditFormComponent,
    ClientEditCommercialReferencesComponent,
    ClientEditCommercialReferencesEditComponent,
    ClientEditStorePicturesComponent,

    ClientNewCommercialReferencesComponent,
    ClientNewContactsComponent,
    ClientNewFormComponent,
    ClientNewFormComponent,
    ClientNewStorePicturesComponent,
    ReviewComponent,
    ClientNewComponent,
    ClientEditStorePicturesEditComponent,
  ],
  imports: [
    CommonModule,
    RepresentativeRoutingModule,
    HomeModule,
    PortinariModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    SharedModule,
  ],
})
export class RepresentanteModule {}
