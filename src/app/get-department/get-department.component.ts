import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-get-department',
  templateUrl: './get-department.component.html',
  styleUrls: ['./get-department.component.css']
})
export class GetDepartmentComponent implements OnInit {

  constructor() { }

  data:any
  data2:any
  data3:any

  depart = [
    {id:1,name:"Sumaiya",Department:"FRONTEND"},
    {id:2,name:"Vijay",Department:"BACKEND"},
    {id:3,name:"Shravan",Department:"FRONTEND"},
    {id:4,name:"Ajith",Department:"DEVOPS"},
    {id:5,name:"Priya",Department:"BACKEND"},
    {id:6,name:"Kuldeep",Department:"FRONTEND"},
    {id:7,name:"Virat",Department:"DEVOPS"},
    {id:8,name:"Shreenitha",Department:"BACKEND"},



  ]

  ngOnInit(): void {
    const source = from(this.depart)


    source.pipe(
      filter(member => member.Department == "FRONTEND"),
      toArray()
    )  

    .subscribe(res =>{
      console.log(res),
      this.data = res;
    }) 
    
    source.pipe(
      filter(member => member.Department == "BACKEND"),
      toArray()
    )  

    .subscribe(res =>{
      console.log(res),
      this.data2 = res;
    }) 
    
    source.pipe(
      filter(member => member.Department == "DEVOPS"),
      toArray()
    )  

    .subscribe(res =>{
      console.log(res),
      this.data3 = res;
    })  



      
}      

}
