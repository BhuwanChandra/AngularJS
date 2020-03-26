import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})

export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Logobj: BaseLogger = null;
  Disable: boolean = false;
  constructor(injector: Injector, public http: HttpClient) {
    this.Logobj = injector.get('1');
    this.Logobj.Log();
  }

  PostToServer() {
    // create a light weight DTO (Data Transfer Object)
    this.Disable = true;
    const custdto: any = {};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    this.http.post('http://localhost:3000/Customers', custdto).subscribe(res => this.Success(res), res => this.Error(res));
  }
  GetFromServer() {
    this.http.get('http://localhost:3000/Customers').subscribe(res => this.SuccessGet(res), res => this.Error(res));
  }
  Error(res) {
    // tslint:disable-next-line:no-console
    console.debug(res.json());
  }
  Success(res) {
    this.GetFromServer();
  }
  SuccessGet(res) {
    this.CustomerModels = res;
    this.Disable = false;
    this.CustomerModel = new Customer();
  }

  SelectCustomer(_selected: Customer) {
    _selected.formCustomerGroup = this.CustomerModel.formCustomerGroup;
    this.CustomerModel = _selected;
  }

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
  hasError(typeofValidator: string, controlName: string){
    return this.CustomerModel.formCustomerGroup
              .controls[controlName]
              .hasError(typeofValidator);
  }
}
