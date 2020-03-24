import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';
import { MasterComponent } from '../Home/CustomerApp.MasterComponent';

export const MainRoutes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Customer', component: CustomerComponent},
  {path: 'Supplier', component: SupplierComponent},
  {path: '', component: HomeComponent},
];
