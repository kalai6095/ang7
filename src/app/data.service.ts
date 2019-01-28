import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) {
  }

  firstClick() {
    return alert("clicked");
  }

  getUsers() {
    return this.httpclient.get('https://reqres.in/api/users')
  }
}
