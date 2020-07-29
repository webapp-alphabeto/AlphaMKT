import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { PortinariModule } from 'src/app/portinari/portinari.module';
import { HomeRoutingModule } from "./home-routing.module";

import { PrincipalComponent } from "./principal/principal.component";

import { MyProfileComponent } from "./my-profile/my-profile.component";
import { ChangePasswordComponent } from "./my-profile/change-password/change-password.component";


import { TokenApiService } from 'src/app/core/interceptors/token-api.service';
import { InvalidTokenApiService } from 'src/app/core/interceptors/invalid-token-api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PrincipalComponent,
    
    MyProfileComponent,
    ChangePasswordComponent,
    
  ],
  imports: [CommonModule, HomeRoutingModule, PortinariModule, FormsModule, SharedModule],
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
export class HomeModule {}
