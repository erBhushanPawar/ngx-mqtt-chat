import { TestBed } from '@angular/core/testing';

import { RealtimeHelperService } from './realtime-helper.service';

describe('RealtimeHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtimeHelperService = TestBed.get(RealtimeHelperService);
    expect(service).toBeTruthy();
  });
});
