import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App11';
  datas:any = []

  /**constructor(private user:UsersService){
    this.user.getData().subscribe(data =>{
      console.warn(data)
      this.datas = data
    })
  }
  data:any
  users:[
    {
      name: "Sumaiya S";
      age: 21;
      department: "Computer Science";
      Skills: "Python";

    },
    {
      name: "Ahamed";
      age: 20;
      department: "Electrical Engineer";
      Skills: "C";

    },
    {
      name: "Shalini";
      age: 19;
      department: "Mechanical Engineer";
      Skills: "C++";

    },
    {
      name: "Sumaiya S";
      age: 21;
      department: "Computer Science";
      Skills: "Python";

    }

  ] | undefined
  
  getName(){
  /**from(this.users).pipe(
      pluck('name'),
      toArray()
    )
    .subscribe(res=>{
      this.data = res
    })-->*/

    
   
  
  

  
    
    

    




} 