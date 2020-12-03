import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucTenDeleteComponent } from './danh-muc-ten-delete.component';

describe('DanhMucTenDeleteComponent', () => {
  let component: DanhMucTenDeleteComponent;
  let fixture: ComponentFixture<DanhMucTenDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucTenDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucTenDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
