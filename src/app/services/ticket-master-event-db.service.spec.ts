import { TestBed } from '@angular/core/testing';

import { TicketMasterEventDBService } from './ticket-master-event-db.service';

describe('TicketMasterEventDBService', () => {
  let service: TicketMasterEventDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketMasterEventDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
