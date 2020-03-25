import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MasterComponent } from './CustomerApp.MasterComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { BaseLogger, ConsoleLogger, DbLogger, FileLogger } from '../Utility/CustomerApp.Logger';

@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
    provide: BaseLogger,
    useClass: ConsoleLogger
  },
  {provide: '1', useClass: DbLogger},
  {provide: '2', useClass: FileLogger}
],
  bootstrap: [MasterComponent]
})

export class MainModule { }
