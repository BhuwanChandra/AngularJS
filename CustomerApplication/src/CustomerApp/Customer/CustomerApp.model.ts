import {
        NgForm,
        FormGroup,
        FormControl,
        Validators,
        FormBuilder
    } from '@angular/forms';

// Create - create the validation object model

// Connect - connect the validation to the UI

// Check - IsValid, IsDirty, IsNotValid

export class Customer {
    // tslint:disable-next-line:no-inferrable-types
    CustomerCode: string = '';
    // tslint:disable-next-line:no-inferrable-types
    CustomerName: string = '';
    // tslint:disable-next-line:no-inferrable-types
    CustomerAmount: number = 0;
    formCustomerGroup: FormGroup = null;
    constructor() {
        const builder = new FormBuilder();
        this.formCustomerGroup = builder.group({});
        // control - validation
        this.formCustomerGroup.addControl(
                'CustomerNameControl',
                new FormControl('', Validators.required)
            );
        const validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));
        this.formCustomerGroup.addControl(
            'CustomerCodeControl',
            new FormControl('', Validators.compose(validationCollection))
        );
    }
}
