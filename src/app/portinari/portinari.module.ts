import { NgModule } from '@angular/core';
import { PoModule, PoToolbarModule, PoModalModule } from '@portinari/portinari-ui';
import { PoPageLoginModule, PoPageDynamicTableModule, PoPageDynamicEditModule, PoPageChangePasswordModule } from '@portinari/portinari-templates';
import { PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';


@NgModule({
  
  exports:[
    PoModule,
    PoToolbarModule,
    PoModalModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    PoPageChangePasswordModule,
    PoPageDynamicEditModule,
    PoPageDynamicTableModule,
  ]
})
export class PortinariModule { }
