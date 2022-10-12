import { TestBed } from '@angular/core/testing';

import { DsLibraryService } from './ds-library.service';

describe('DsLibraryService', () => {
  let service: DsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
