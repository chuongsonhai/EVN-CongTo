import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyDayChiDeleteComponent } from './nguoi-quan-ly-day-chi-delete.component';

describe('NguoiQuanLyDayChiDeleteComponent', () => {
  let component: NguoiQuanLyDayChiDeleteComponent;
  let fixture: ComponentFixture<NguoiQuanLyDayChiDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyDayChiDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyDayChiDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
