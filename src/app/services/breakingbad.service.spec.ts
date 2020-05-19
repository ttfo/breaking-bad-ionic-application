import { TestBed } from '@angular/core/testing';

import { BreakingbadService } from './breakingbad.service';

describe('BreakingbadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreakingbadService = TestBed.get(BreakingbadService);
    expect(service).toBeTruthy();
  });
});
