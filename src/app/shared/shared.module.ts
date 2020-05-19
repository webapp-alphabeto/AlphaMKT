import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PoModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    PoModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class SharedModule { }
