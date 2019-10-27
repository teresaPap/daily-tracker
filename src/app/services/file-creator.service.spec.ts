import { TestBed } from '@angular/core/testing';

import { FileCreatorService } from './file-creator.service';

describe('FileCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileCreatorService = TestBed.get(FileCreatorService);
    expect(service).toBeTruthy();
  });
});
