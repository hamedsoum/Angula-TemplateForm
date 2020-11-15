import { TestBed } from '@angular/core/testing';

import { SendDataToServerService } from './send-data-to-server.service';

describe('SendDataToServerService', () => {
  let service: SendDataToServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendDataToServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
