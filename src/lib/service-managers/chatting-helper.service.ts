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
  connect(config) {
    this.mqttService.connect(config)
  }

  getMessages(channelId) {
    return Array.from(this.messages.get(channelId).values())
  }
  pushMessages(channelId, msg) {
    if (!this.messages.get(channelId)) {
      this.messages.set(channelId, [])
    }
    this.messages.get(channelId).push(msg)
  }

  publishToMqtt(channelId, msg) {
    msg.sentOn = new Date().getTime()
    this.mqttService.sendToMqtt(channelId, msg)
  }
  subscribeToQueue(channelId) {
    this.mqttService.observeTopic(channelId)
    return this.realtime.getSubscription(channelId)
  }
}
