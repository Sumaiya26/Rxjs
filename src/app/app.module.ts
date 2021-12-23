import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetnameComponent } from './getname/getname.component';
import { GetDepartmentComponent } from './get-department/get-department.component';
import { RankComponent } from './rank/rank.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
import { DashComponent } from './dash/dash.component';
import { SalaryComponent } from './salary/salary.component';
import { SubjectComponent } from './subject/subject.component';
import { Sub1Component } from './sub1/sub1.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    GetnameComponent,
    GetDepartmentComponent,
    RankComponent,
    GetemployeeComponent,
    DashComponent,
    SalaryComponent,
    SubjectComponent,
    Sub1Component,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
