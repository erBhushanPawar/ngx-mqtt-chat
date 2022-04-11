import { Injectable } from '@angular/core';
import { RealtimeHelperService } from './realtime-helper.service';
import { MqttClientService } from './mqtt-client.service';


@Injectable({
  providedIn: 'root'
})
export class ChattingHelperService {
  messages: Map<String, any[]> = new Map();
  constructor(private realtime: RealtimeHelperService,
    private mqttService: MqttClientService) {
  }
  connect(config: any) {
    this.mqttService.connect(config)
  }
  deleteMsgQueue(channelId: string) {
    this.messages.delete(channelId)
  }
  setMessages(channelId: string, messages: any[]) {
    this.messages.set(channelId, messages)
  }
  getMessages(channelId: string) {
    return Array.from((this.messages.get(channelId) || new Map()).values())
  }
  pushMessages(channelId: string, msg: any) {
    if (!this.messages.get(channelId)) {
      this.messages.set(channelId, [])
    }
    this.messages.get(channelId)?.push(msg)
  }

  publishToMqtt(channelId: string, msg: any) {
    msg.sentOn = new Date().getTime()
    this.mqttService.sendToMqtt(channelId, msg)
  }
  subscribeToQueue(channelId: string) {
    this.mqttService.observeTopic(channelId)
    return this.realtime.getSubscription(channelId)
  }
}
