import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new BehaviorSubject<string>('');

  constructor() {}

  sendMessage(message: string) {
    this.subject.next(message);
  }

  receivedMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}


