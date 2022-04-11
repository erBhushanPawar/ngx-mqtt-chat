import { Injectable } from '@angular/core';
import { ChattingHelperService } from './service-managers/chatting-helper.service';

@Injectable({
  providedIn: 'root'
})
export class NgxMqttChatService {

  constructor(private chattingService: ChattingHelperService) { }
  connect(config: string) {
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
  subscribeToTopic(topicName: string) {
    return this.chattingService.subscribeToQueue(topicName)
  }

  publishToTopic(topicName: string, msg: any) {
    return this.chattingService.publishToMqtt(topicName, msg)
  }

}
