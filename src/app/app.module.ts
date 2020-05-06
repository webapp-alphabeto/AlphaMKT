import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortinariModule } from './portinari/portinari.module';
import { PoModule } from '@po-ui/ng-components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InvalidTokenApiService } from './interceptors/invalid-token-api.service';
import { TokenApiService } from './interceptors/token-api.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PortinariModule,
    PoModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
