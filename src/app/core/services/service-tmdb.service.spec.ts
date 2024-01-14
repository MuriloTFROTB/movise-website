import { TestBed } from '@angular/core/testing';

import { ServiceTmdbService } from './service-tmdb.service';

describe('ServiceTmdbService', () => {
  let service: ServiceTmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
