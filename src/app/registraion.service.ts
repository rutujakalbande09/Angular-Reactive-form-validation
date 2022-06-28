import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { StudentData } from './student-data';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  urlValue: String = 'localhost:3000';

  constructor(private http: HttpClient) {}

  saveData(sData: StudentData) {
    this.urlValue = this.urlValue + 'studentDetail';
    this.http.post(this.urlValue, sData).subscribe();
  }

  getData() {}

  updateData() {}

  deleteData() {}
}
