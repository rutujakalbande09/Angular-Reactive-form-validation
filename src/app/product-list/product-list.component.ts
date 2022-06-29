import { Component } from '@angular/core';

import { products } from '../products';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentData } from '../student-data';
import { RegistrationService } from '../registraion.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  submitFlag: boolean = false;
  registrationForm!: FormGroup;
  registrationData: any = new StudentData('', '', '', '', '');
  share() {
    window.alert('The product has been shared!');
  }

  constructor(private studService: RegistrationService) {
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
  assignData() {
    this.registrationData.Firstname = this.registrationForm.value.Firstname;
    this.registrationData.Lastname = this.registrationForm.value.Lastname;
    this.registrationData.emailId = this.registrationForm.value.emailId;
    this.registrationData.Mobilenumber =
      this.registrationForm.value.Mobilenumber;
    this.registrationData.address = this.registrationForm.value.address;
  }

  onSubmit() {
    this.submitFlag = true;
    if (this.registrationForm.valid) {
      this.submitFlag = false;
      this.assignData();
      this.studService.saveData(this.registrationData);
    }
  }

  get r() {
    return this.registrationForm.controls;
  }
  updateRegistrationForm() {
    if (this.registrationForm.valid) {
      this.assignData();
      this.studService.updateData(this.registrationData);
    }
  }
  deleteRegistrationForm() {
    if (this.registrationForm.valid) {
      this.assignData();
      this.studService.deleteData(this.registrationData);
    }
  }
  searchRegistrationForm() {
    if (this.registrationForm.valid) {
      this.assignData();
      this.studService.searchData(this.registrationData);
    }
  }
}

/*this.profileD.firstName = this.registrationForm.value.firstName; 
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
