import { TestBed } from '@angular/core/testing';

import { SnackbarsService } from './snackbars.service';

describe('SnackbarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackbarsService = TestBed.get(SnackbarsService);
    expect(service).toBeTruthy();
  });
});
