import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, of } from 'rxjs';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  data:any
  ngOnInit(): void {
    
    const name = ["SUMAIYA"];
    

    from(name)
    .pipe(
      map((d) => {
        return this.getMessage(d);
      }),
      mergeAll()
    )

    .subscribe((d)=>{
      console.log(d);
      this.data = d;
    });

  } 
  getMessage(name: string){
    return of ("HEY"+" "+name+" "+"HOPE YOUR DOING FINE!!!");

  } 

}






  