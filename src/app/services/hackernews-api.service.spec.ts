import { TestBed } from '@angular/core/testing';

import { HackernewsApiService } from './hackernews-api.service';

describe('HackernewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HackernewsApiService = TestBed.get(HackernewsApiService);
    expect(service).toBeTruthy();
  });
});
