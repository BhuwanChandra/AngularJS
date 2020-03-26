import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { MyInterceptor } from '../Utility/CustomerApp.httpIntercepter';

@NgModule({
    declarations: [
        CustomerComponent,
        GridComponent
    ],
    imports: [
        RouterModule.forChild(CustomerRoutes),
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
    ],
    bootstrap: [CustomerComponent]
})

export class CustomerModule { }
