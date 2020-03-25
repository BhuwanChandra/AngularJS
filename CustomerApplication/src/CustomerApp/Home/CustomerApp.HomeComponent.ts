import { Component } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.HomeView.html'
})

export class HomeComponent {
  Logobj: BaseLogger = null;
  constructor(logger: BaseLogger) {
    this.Logobj = logger;
    this.Logobj.Log();
  }
}
