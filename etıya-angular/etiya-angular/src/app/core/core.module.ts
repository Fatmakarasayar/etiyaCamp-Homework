
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { IfNotDirective } from '../components/features/products/directives/ifNot/if-not.directive';

@NgModule({
  declarations: [IfNotDirective],
  imports: [CommonModule, CoreRoutingModule, AuthModule],
  exports: [IfNotDirective]
})
export class CoreModule {}