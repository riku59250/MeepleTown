import { TestBed } from '@angular/core/testing';

import { GamesServicesService } from './games-services.service';

describe('GamesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesServicesService = TestBed.get(GamesServicesService);
    expect(service).toBeTruthy();
  });
});
