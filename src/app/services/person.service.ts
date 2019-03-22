import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  public fetchUsers() {
    this.http.get(this.baseUrl + '/People').subscribe((res) => {
      console.log(res);
    });
  }
}
