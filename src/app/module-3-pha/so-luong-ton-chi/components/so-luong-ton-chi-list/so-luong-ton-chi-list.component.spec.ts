import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoLuongTonChiListComponent } from './so-luong-ton-chi-list.component';

describe('SoLuongTonChiListComponent', () => {
  let component: SoLuongTonChiListComponent;
  let fixture: ComponentFixture<SoLuongTonChiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoLuongTonChiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoLuongTonChiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
