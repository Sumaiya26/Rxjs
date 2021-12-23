import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}
  sendMessage(message:string) {
    this.messageService.sendMessage(message);
    alert("EMPLOYEE ADDED SUCCESSFULLY")
  }
}
