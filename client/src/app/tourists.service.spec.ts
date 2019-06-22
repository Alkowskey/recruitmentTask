import { TestBed } from '@angular/core/testing';

import { TouristsService } from './tourists.service';

describe('TouristsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristsService = TestBed.get(TouristsService);
    expect(service).toBeTruthy();
  });
});
