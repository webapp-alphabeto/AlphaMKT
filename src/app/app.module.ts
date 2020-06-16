import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, LOCALE_ID } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localePt, "pt");


import { AppRoutingModule } from "./app-routing.module";
import { PortinariModule } from "./portinari/portinari.module";
import { SharedModule } from "./shared/shared.module";
import { PoModule } from "@po-ui/ng-components";

import { AppComponent } from "./app.component";

import { TokenApiService } from './core/interceptors/token-api.service';
import { InvalidTokenApiService } from './core/interceptors/invalid-token-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PortinariModule,
    SharedModule,
    PoModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt",
    },
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
  bootstrap: [AppComponent],
})
export class AppModule {}
