import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyDayChiListComponent } from './nguoi-quan-ly-day-chi-list.component';

describe('NguoiQuanLyDayChiListComponent', () => {
  let component: NguoiQuanLyDayChiListComponent;
  let fixture: ComponentFixture<NguoiQuanLyDayChiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyDayChiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyDayChiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
