import { Component, OnInit } from '@angular/core';

import {EmployeeProfessional} from '../model/EmployeeProfessional';

@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.css'],
  providers:[EmployeeProfessional]
})
export class ProfessionalDetailComponent implements OnInit {

  constructor(private employeeProfessional:EmployeeProfessional) { }

  ngOnInit() {
  }
  sendData(){
    return this.employeeProfessional;
  }

}
