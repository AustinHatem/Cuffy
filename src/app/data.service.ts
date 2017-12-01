import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

	result: any;

  constructor(private http: HttpClient) { }

  getUsers(){
  	return this.http.get('/api/users');
  }

}
