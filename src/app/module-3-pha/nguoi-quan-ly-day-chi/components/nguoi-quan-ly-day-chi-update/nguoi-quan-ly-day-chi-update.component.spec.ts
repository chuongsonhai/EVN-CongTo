import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyDayChiUpdateComponent } from './nguoi-quan-ly-day-chi-update.component';

describe('NguoiQuanLyDayChiUpdateComponent', () => {
  let component: NguoiQuanLyDayChiUpdateComponent;
  let fixture: ComponentFixture<NguoiQuanLyDayChiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyDayChiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyDayChiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
