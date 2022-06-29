import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { StudentData } from './student-data';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  saveData(sData: StudentData) {
    alert('create Service' + sData.Firstname);
    let d = new Date();
    let hostUrl =
      'http://localhost:3000/apps/student?v=' + d.toLocaleTimeString();
    hostUrl = hostUrl + 'studentDetail';
    this.http.post(hostUrl, sData).subscribe();
  }

  searchData(sData: StudentData) {
    alert('searchService  ' + sData.Firstname);
    let d = new Date();
    let hostUrl =
      'http://localhost:3000/apps/student?v=' + d.toLocaleTimeString();
    hostUrl = hostUrl + 'studentDetail';
    this.http.get(hostUrl).subscribe();
  }

  updateData(sData: StudentData) {
    alert('updateService    ' + sData.Firstname);
    let d = new Date();
    let hostUrl =
      'http://localhost:3000/apps/student/' +
      sData.Firstname +
      '?v=' +
      d.toLocaleTimeString();
    hostUrl = hostUrl + 'studentDetail';
    this.http.put(hostUrl, sData).subscribe();
  }

  deleteData(sData: StudentData) {
    alert('delete service   ' + sData.Lastname);
    let d = new Date();
    let hostUrl =
      'http://localhost:3000/apps/student/' +
      sData.Firstname +
      '?v=' +
      d.toLocaleTimeString();
    hostUrl = hostUrl + 'studentDetail';
    this.http.delete(hostUrl).subscribe();
  }
}
