import { TestBed } from '@angular/core/testing';

import { DonutsAPIService } from './donuts-api.service';

describe('DonutsAPIService', () => {
  let service: DonutsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
