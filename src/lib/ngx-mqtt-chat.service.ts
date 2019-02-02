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
  deleteMsgQueue(channelId: string) {
    this.chattingService.getMessages(channelId)
  }
  setMessages(channelId: string, messages: any[]) {
    this.chattingService.setMessages(channelId, messages)
  }
  getMessages(channelId: string) {
    return this.chattingService.getMessages(channelId)
  }
  pushMessages(channelId: string, msg: any) {
    this.chattingService.pushMessages(channelId, msg)
  }
  subscribeToTopic(topicName) {
    return this.chattingService.subscribeToQueue(topicName)
  }

  publishToTopic(topicName, msg) {
    return this.chattingService.publishToMqtt(topicName, msg)
  }

}
