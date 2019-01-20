import { Injectable } from '@angular/core';
import { RealtimeHelperService } from './realtime-helper.service';
import { MqttClientService } from './mqtt-client.service';


@Injectable({
  providedIn: 'root'
})
export class ChattingHelperService {
  messages: Map<String, any[]> = new Map();
  constructor(private realtime: RealtimeHelperService, private mqttService: MqttClientService) {

  }
  connect(config) {
    this.mqttService.connect(config)
  }
  getMessages() {
    return Array.from(this.messages.values())
  }

  publishToMqtt(commId, msg) {
    msg.sentOn = new Date().getTime()
    this.mqttService.sendToMqtt(commId, msg)
  }
  subscribeToQueue(commId) {
    this.mqttService.observeTopic(commId)
    return this.realtime.getSubscription(commId)
  }
}
