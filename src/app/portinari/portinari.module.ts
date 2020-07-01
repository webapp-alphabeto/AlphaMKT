import { NgModule } from '@angular/core';
import { PoModule, PoToolbarModule, PoModalModule, PoPopoverModule, PoTableModule } from '@po-ui/ng-components';
import { PoPageLoginModule, PoPageDynamicTableModule, PoPageDynamicEditModule, PoPageChangePasswordModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';
import { PoNavbarModule, PoBreadcrumbModule } from '@po-ui/ng-components';

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
    PoPopoverModule,
    PoNavbarModule,
    PoBreadcrumbModule,
    PoTableModule,
    PoTemplatesModule
  ]
})
export class PortinariModule { }
