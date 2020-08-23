import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {EmployeePersonal} from '../model/EmployeePersonal';
@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css'],
  providers:[EmployeePersonal]
})
export class PersonalDetailComponent implements OnInit {

 
  constructor(private personalDetails:EmployeePersonal) { }
   
  ngOnInit() {
    console.log(this.personalDetails);
  }

  sendData(){
    return this.personalDetails;
  }
}
