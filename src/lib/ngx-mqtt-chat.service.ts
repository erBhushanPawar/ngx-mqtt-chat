import { Injectable } from '@angular/core';
import { ChattingHelperService } from './service-managers/chatting-helper.service';

@Injectable({
  providedIn: 'root'
})
export class NgxMqttChatService {

  constructor(private chattingService: ChattingHelperService) { }
  connect(config) {
    this.chattingService.connect(config)
  }
  subscribeToTopic(topicName) {
    return this.chattingService.subscribeToQueue(topicName)
  }

  publishToTopic(topicName, msg) {
    return this.chattingService.publishToMqtt(topicName, msg)
  }
}
