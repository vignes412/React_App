import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {EmployeePersonal} from './model/EmployeePersonal';
import {EmployeeProfessional} from './model/EmployeeProfessional';

@Injectable()
export class EmployeeDetailsService {

  constructor(private http: Http) { }

  addEmployeeDetails(empPers:EmployeePersonal,empPro:EmployeeProfessional):Observable<any>{
    console.log(empPers,empPro);
    let body=empPers;
    body.Professional=empPro;
    return this.http.post('http://localhost:3000/api/addemployee', body) 
    .map((res:Response) => res.json()) 
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
