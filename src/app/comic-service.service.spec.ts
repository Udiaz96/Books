import { TestBed } from '@angular/core/testing';

import { ComicServiceService } from './comic-service.service';

describe('ComicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicServiceService = TestBed.get(ComicServiceService);
    expect(service).toBeTruthy();
  });
});
