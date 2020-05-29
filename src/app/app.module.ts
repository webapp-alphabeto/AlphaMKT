import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortinariModule } from './portinari/portinari.module';
import { PoModule } from '@po-ui/ng-components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InvalidTokenApiService } from './interceptors/invalid-token-api.service';
import { TokenApiService } from './interceptors/token-api.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PortinariModule,
    PoModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
