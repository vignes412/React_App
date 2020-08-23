import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ProfessionalDetailComponent } from './professional-detail/professional-detail.component';


import { EmployeeDetailsService } from './employee-details.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeformComponent,
    PersonalDetailComponent,
    ProfessionalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
