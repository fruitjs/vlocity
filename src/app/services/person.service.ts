import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public personData: {};
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  public fetchUsers() {
    return this.http.get(this.baseUrl + '/People');
  }
}
