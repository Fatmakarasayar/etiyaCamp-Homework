import { SaleDirective } from './directives/sale/sale.directive';
import { KDVPipe } from './directives/kdv/kdv.pipe';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent, KDVPipe, SaleDirective],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductCardComponent, ProductListComponent]
})
export class ProductsModule {}
