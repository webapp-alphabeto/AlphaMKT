import { NgModule } from '@angular/core';
import { PoModule, PoToolbarModule, PoModalModule } from '@po-ui/ng-components';
import { PoPageLoginModule, PoPageDynamicTableModule, PoPageDynamicEditModule, PoPageChangePasswordModule } from '@po-ui/ng-templates';
import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';


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
