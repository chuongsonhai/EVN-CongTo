import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoLuongTonDayChiListComponent } from './so-luong-ton-day-chi-list.component';

describe('SoLuongTonDayChiListComponent', () => {
  let component: SoLuongTonDayChiListComponent;
  let fixture: ComponentFixture<SoLuongTonDayChiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoLuongTonDayChiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoLuongTonDayChiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
