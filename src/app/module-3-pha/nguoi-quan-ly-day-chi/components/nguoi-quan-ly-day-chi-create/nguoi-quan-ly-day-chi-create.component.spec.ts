import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyDayChiCreateComponent } from './nguoi-quan-ly-day-chi-create.component';

describe('NguoiQuanLyDayChiCreateComponent', () => {
  let component: NguoiQuanLyDayChiCreateComponent;
  let fixture: ComponentFixture<NguoiQuanLyDayChiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyDayChiCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyDayChiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
