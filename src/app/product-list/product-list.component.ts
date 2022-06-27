import { Component } from '@angular/core';

import { products } from '../products';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  submitFlag: boolean = false;
  registrationForm!: FormGroup;

  share() {
    window.alert('The product has been shared!');
  }

  constructor() {
    this.registrationForm = new FormGroup({
      Firstname: new FormControl('', { validators: [Validators.required] }),
      Lastname: new FormControl('', { validators: [Validators.required] }),
      emailId: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      Mobilenumber: new FormControl('', {
        validators: [Validators.required, Validators.pattern('[0-9]{10}')],
      }),
      address: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit() {
    this.submitFlag = true;
    if (this.registrationForm.valid) {
      this.submitFlag = false;
    }
  }

  get r() {
    return this.registrationForm.controls;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
