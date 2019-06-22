import { TestBed } from '@angular/core/testing';

import { TouristsFlightsService } from './tourists-flights.service';

describe('TouristsFlightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristsFlightsService = TestBed.get(TouristsFlightsService);
    expect(service).toBeTruthy();
  });
});
