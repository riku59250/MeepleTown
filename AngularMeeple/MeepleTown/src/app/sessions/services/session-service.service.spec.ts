import { TestBed } from '@angular/core/testing';

import { SessionServiceService } from './session-service.service';

describe('SessionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionServiceService = TestBed.get(SessionServiceService);
    expect(service).toBeTruthy();
  });
});
