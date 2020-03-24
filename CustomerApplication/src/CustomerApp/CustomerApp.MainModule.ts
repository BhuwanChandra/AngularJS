import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './Routing/CustomerApp.MainRouting.module';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { MasterComponent } from './Home/CustomerApp.MasterComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';

@NgModule({
  declarations: [
    CustomerComponent,
    MasterComponent,
    HomeComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})

export class MainModule { }
