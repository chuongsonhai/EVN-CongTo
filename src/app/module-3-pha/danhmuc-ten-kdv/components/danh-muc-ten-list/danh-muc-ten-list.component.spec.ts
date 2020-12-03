import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucTenListComponent } from './danh-muc-ten-list.component';

describe('DanhMucTenListComponent', () => {
  let component: DanhMucTenListComponent;
  let fixture: ComponentFixture<DanhMucTenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucTenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucTenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
