import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
  message: any;
  $subs : Subscription | any;
 

  constructor(private messageService: MessageService) {
   
  }

  ngOnInit(): void {
    
    this.$subs = this.messageService.receivedMessage().subscribe((d) => {
      this.message = d;
    });
  }
  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}


  
