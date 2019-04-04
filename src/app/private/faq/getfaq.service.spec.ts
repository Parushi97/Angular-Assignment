import { TestBed } from '@angular/core/testing';

import { GetfaqService } from './getfaq.service';

describe('GetfaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetfaqService = TestBed.get(GetfaqService);
    expect(service).toBeTruthy();
  });
});
