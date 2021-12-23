import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {

    const Arr = ["Aravind #1","Suresh #2","Amrita #3","Kirthi #4","Shyama #5"]

    const source = interval(1500);

    let obsSubscription:Subscription

    obsSubscription = source.pipe(

      tap(res => {
        if(res == 4){
          obsSubscription.unsubscribe()
        }
      }),
      map(res => Arr[res])
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res,"elContainer")

    })
  }

}
