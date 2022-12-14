import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';


@NgModule({
  declarations: [    
    IfNotDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  exports:[
    IfNotDirective,
  ]
})
export class CoreModule { }
