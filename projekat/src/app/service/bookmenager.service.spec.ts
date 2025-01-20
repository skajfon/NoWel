import { TestBed } from '@angular/core/testing';

import { BookmenagerService } from './bookmenager.service';

describe('BookmenagerService', () => {
  let service: BookmenagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmenagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
