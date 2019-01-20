import { TestBed } from '@angular/core/testing';

import { ChattingHelperService } from './chatting-helper.service';

describe('ChattingHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChattingHelperService = TestBed.get(ChattingHelperService);
    expect(service).toBeTruthy();
  });
});
