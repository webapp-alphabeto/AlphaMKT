import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortinariModule } from './portinari/portinari.module';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PortinariModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
