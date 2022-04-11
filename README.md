# Ngx-MQTT-Chat

> Build your own angular chatting application just in 5 minutes !

This Chat service is built over ngx-mqtt plugin and uses observable realtime messaging for seamless communication to and from componenets.

Just 3 Steps to perform
  - Install MQTT broker on your machine (with websockets open on 8083)
  - Install library
  - Subscribe and publish to MQTT - Enjoy !

# New Features!

  - Connect / reconfigure / disconnect
  - Auto reconnect
  - Publish to queue  
  - Subscribe to messages

### Installation

Angular 6+ (I not tried for previous version - try your luck)

Install the dependencies and devDependencies and start the server.

```sh
$ npm i ngx-mqtt ngx-mqtt-chat --save
```

For production environments...

```sh
....
import { NgxMqttChatModule } from 'ngx-mqtt-chat';
....
```
Inside app module.ts
```
imports: [
    ...
    NgxMqttChatModule
    ...
  ],
```
Inside component where you want to use this

```
import { NgxMqttChatService } from 'ngx-mqtt-chat';


export class DashChatComponent implements OnInit {
  topicName = "bhushan=123jnsdfiu3kjsddkfweiurnsdf"
  constructor(private chattingService: NgxMqttChatService) {
    let mqtt = {
      manageConnectionManually: false, //this flag will prevent the service to connection automatically
      hostname: 'localhost',
      port: 8083,
      protocol: 'ws',
      path: ''
    }
    this.chattingService.connect(mqtt)
  }
  ngOnInit() {
    
    this.chattingService.subscribeToTopic(this.topicName).subscribe(x => {
      console.log("Chatting component received msg", x)
    })
  }
  sendMsg() {
    this.chattingService.publishToTopic(this.topicName, { from: "bhushan", to: "alexa", profile: { img: "assets/images/user-avatar-small-01.jpg", name: "Bhushan" }, channelId: "sample-topic", msg: "Hello there" })
  }
}
```



### Plugins

We are extending below plugins

| Plugin | README |
| ------ | ------ |
| Ngx-MQTT | [https://www.npmjs.com/package/ngx-mqtt]


License
----

MIT
**Free Software, Hell Yeah!**
