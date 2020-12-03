import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucTenUpdateComponent } from './danh-muc-ten-update.component';

describe('DanhMucTenUpdateComponent', () => {
  let component: DanhMucTenUpdateComponent;
  let fixture: ComponentFixture<DanhMucTenUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucTenUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucTenUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
