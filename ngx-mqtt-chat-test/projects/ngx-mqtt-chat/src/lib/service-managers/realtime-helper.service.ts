import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealtimeHelperService {
  private topicBasedSubjects: Map<String, BehaviorSubject<any>> = new Map()
  constructor() {
    console.log("Flushed realtime helper service")
  }
  publish(qName: string, msg: any) {
    if (!this.topicBasedSubjects.has(qName)) {
      this.topicBasedSubjects.set(qName, new BehaviorSubject(null))
    }
    return this.topicBasedSubjects.get(qName)?.next(msg)
  }


  getSubscription(qName: string) {
    this.createIfNotExists(qName)
    return this.topicBasedSubjects.get(qName)
  }







  /* Helpers */
  createIfNotExists(qName: string) {
    if (!this.isExists(qName)) {
      this.topicBasedSubjects.set(qName, new BehaviorSubject(null))
    }
  }
  isExists(qName: string) {
    return this.topicBasedSubjects.has(qName)
  }
}
