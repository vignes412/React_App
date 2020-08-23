import { Component, OnInit, ViewChild } from '@angular/core';

import { EmployeeProfessional } from '../model/EmployeeProfessional';
import {EmployeePersonal} from '../model/EmployeePersonal';

import {PersonalDetailComponent} from '../personal-detail/personal-detail.component';
import {ProfessionalDetailComponent} from '../professional-detail/professional-detail.component';

import {EmployeeDetailsService} from '../employee-details.service';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  personalDetails:EmployeePersonal;
  professionalDetails:EmployeeProfessional;

  @ViewChild(PersonalDetailComponent) personalDetail:PersonalDetailComponent;
  @ViewChild(ProfessionalDetailComponent) professionalDetail:ProfessionalDetailComponent;
  constructor(private EmpDetService:EmployeeDetailsService) { }

  ngOnInit() {
  }
  SubmitFunction(){
    console.log(this.personalDetail.sendData(),this.professionalDetail.sendData());
    
    this.EmpDetService.addEmployeeDetails(this.personalDetail.sendData(),this.professionalDetail.sendData())
    .subscribe((data)=>{
      console.log(data);
      return true;
    })
  }
}
