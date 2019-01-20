import { NgModule } from '@angular/core';
import { MqttModule } from 'ngx-mqtt';
var opt = {
  manageConnectionManually: false,
  host: window.location.hostname,
  port: 8083,
  path: ''
}
@NgModule({
  declarations: [],
  imports: [
    MqttModule.forRoot(opt)
  ],
  providers: [],
  exports: []
})
export class NgxMqttChatModule { }
