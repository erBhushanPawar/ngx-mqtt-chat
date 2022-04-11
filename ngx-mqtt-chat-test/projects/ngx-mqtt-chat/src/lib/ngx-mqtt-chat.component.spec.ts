import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMqttChatComponent } from './ngx-mqtt-chat.component';

describe('NgxMqttChatComponent', () => {
  let component: NgxMqttChatComponent;
  let fixture: ComponentFixture<NgxMqttChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMqttChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMqttChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
