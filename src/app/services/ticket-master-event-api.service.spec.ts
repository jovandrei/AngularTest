import { TestBed } from '@angular/core/testing';

import { TicketMasterEventAPIService } from './ticket-master-event-api.service';

describe('TicketMasterEventAPIService', () => {
  let service: TicketMasterEventAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketMasterEventAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
