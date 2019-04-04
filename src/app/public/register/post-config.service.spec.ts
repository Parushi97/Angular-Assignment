import { TestBed } from '@angular/core/testing';

import { PostConfigService } from './post-config.service';

describe('PostConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostConfigService = TestBed.get(PostConfigService);
    expect(service).toBeTruthy();
  });
});
