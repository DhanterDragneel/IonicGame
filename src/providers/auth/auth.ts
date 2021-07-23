// import {Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
// let apiUrl = 'https://elecompindonesia.com/game';
let apiUrl = 'http://localhost/blog/game';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  constructor(public http: HttpClient) {
    // console.log('Hello AuthProvider Provider');
  }
  GetData(type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`);
  }

}
