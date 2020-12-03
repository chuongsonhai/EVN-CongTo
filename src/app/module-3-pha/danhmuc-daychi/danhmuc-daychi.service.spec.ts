import { TestBed } from '@angular/core/testing';

import { DanhmucDaychiService } from './danhmuc-daychi.service';

describe('DanhmucDaychiService', () => {
  let service: DanhmucDaychiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhmucDaychiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
