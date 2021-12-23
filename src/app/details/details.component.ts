import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  person:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails(){
    this.http.get("http://localhost:3000/employees/1").subscribe(res=>{
      console.log(res)
      this.person = res;
    }
    )
  }

}
