import { TestBed } from '@angular/core/testing';

import { MqttClientService } from './mqtt-client.service';

describe('MqttClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MqttClientService = TestBed.get(MqttClientService);
    expect(service).toBeTruthy();
  });
});
