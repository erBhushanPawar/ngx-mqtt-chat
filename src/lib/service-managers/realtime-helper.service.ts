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
  publish(qName, msg) {
    this.createIfNotExists(qName)
    this.topicBasedSubjects.get(qName).next(msg)
  }


  getSubscription(qName) {
    this.createIfNotExists(qName)
    return this.topicBasedSubjects.get(qName)
  }







  /* Helpers */
  createIfNotExists(qName) {
    if (!this.isExists(qName)) {
      this.topicBasedSubjects.set(qName, new BehaviorSubject(null))
    }
  }
  isExists(qName) {
    return this.topicBasedSubjects.has(qName)
  }
}
