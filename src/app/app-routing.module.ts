import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DetailsComponent } from './details/details.component';
import { GetDepartmentComponent } from './get-department/get-department.component';
import { GetnameComponent } from './getname/getname.component';
import { SalaryComponent } from './salary/salary.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path:"employee1",component:DetailsComponent},
  {path:"employee",component:SubjectComponent},
  {path:"salry1",component:SalaryComponent},
  {path:"salary",component:DashComponent},
  {path:"names",component:GetnameComponent},
  {path:"dept",component:GetDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
