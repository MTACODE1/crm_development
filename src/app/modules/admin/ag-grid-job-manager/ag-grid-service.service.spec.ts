import { TestBed } from '@angular/core/testing';

import { AgGridServiceService } from './ag-grid-service.service';

describe('AgGridServiceService', () => {
  let service: AgGridServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgGridServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
