import { TestBed } from '@angular/core/testing';

import { QLCaiDatCongToService } from './qlcai-dat-cong-to.service';

describe('QLCaiDatCongToService', () => {
  let service: QLCaiDatCongToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QLCaiDatCongToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
