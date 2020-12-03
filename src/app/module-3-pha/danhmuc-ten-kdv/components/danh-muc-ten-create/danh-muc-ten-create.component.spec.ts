import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucTenCreateComponent } from './danh-muc-ten-create.component';

describe('DanhMucTenCreateComponent', () => {
  let component: DanhMucTenCreateComponent;
  let fixture: ComponentFixture<DanhMucTenCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucTenCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucTenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
