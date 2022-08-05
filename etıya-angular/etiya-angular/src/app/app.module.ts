import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

import { CardClickDirective } from './components/features/products/directives/product-click/card-click.directive';
import { SearchPipe } from './pipes/search-product/search.pipe';

import { MultipleDirective } from './components/features/products/directives/multiple/multiple.directive';
import { ProductsModule } from './components/features/products/products.module';
import { AuthModule } from './core/auth/auth.module'

@NgModule({
  declarations: [
    AppComponent,
   
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
   
    CategoryListComponent,
    RegisterComponent,
    CustomerComponent,
    EditCustomerComponent,


    CardClickDirective,
    SearchPipe,
    
    MultipleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductsModule,
    AuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
