import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PoModule } from '@po-ui/ng-components';
import { NgxMaskModule, IConfig, MaskPipe } from 'ngx-mask';
import { MaskArrayPipe } from './pipes/mask-array.pipe';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [ToolbarComponent, MaskArrayPipe],
  imports: [
    CommonModule,
    PoModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  exports:[
    ToolbarComponent,
    MaskPipe,
    MaskArrayPipe
  ],
  providers:[
    MaskPipe
  ]
})
export class SharedModule { }
