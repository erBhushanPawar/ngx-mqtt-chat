import { Injectable } from '@angular/core';
import { MqttService } from 'ngx-mqtt';
import { RealtimeHelperService } from './realtime-helper.service';

@Injectable({
  providedIn: 'root'
})
export class MqttClientService {
  watching = null;
  constructor(private mqttService: MqttService, private realtime: RealtimeHelperService) {


  }
  connect(config: any) {
    this.disonnect()
    console.log("Disconnecting and reconn to other config", config)
    this.mqttService.connect(config)
  }
  disonnect() {
    this.mqttService.disconnect()
  }
  observeTopic(topic: string) {

    this.mqttService.observe(topic).subscribe((x) => {
      let msg = x.payload.toString();
      try {
        msg = JSON.parse(msg.toString())
      } catch (e) { }
      this.realtime.publish(x.topic, msg)
    })
  }

  sendToMqtt(topic: string, msg: any) {
    if (typeof msg != 'string') {
      msg = JSON.stringify(msg)
    }
    this.mqttService.publish(topic, msg).subscribe((x) => {
      console.log(x)
    }, y => {
      console.warn(y)
    })
  }
}
