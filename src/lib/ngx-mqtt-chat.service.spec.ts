import { TestBed } from '@angular/core/testing';

import { NgxMqttChatService } from './ngx-mqtt-chat.service';

describe('NgxMqttChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMqttChatService = TestBed.get(NgxMqttChatService);
    expect(service).toBeTruthy();
  });
});
