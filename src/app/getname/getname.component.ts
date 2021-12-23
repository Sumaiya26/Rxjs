import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Component({
  selector: 'app-getname',
  templateUrl: './getname.component.html',
  styleUrls: ['./getname.component.css']
})
export class GetnameComponent implements OnInit {
  

  person:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails(){
    this.http.get("http://localhost:3000/employees").subscribe(res=>{
      console.log(res)
      this.person = res;
    }
    )
  }

}

  

 


