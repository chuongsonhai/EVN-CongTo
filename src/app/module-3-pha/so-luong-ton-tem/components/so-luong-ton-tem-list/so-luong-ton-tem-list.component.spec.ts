import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoLuongTonTemListComponent } from './so-luong-ton-tem-list.component';

describe('SoLuongTonTemListComponent', () => {
  let component: SoLuongTonTemListComponent;
  let fixture: ComponentFixture<SoLuongTonTemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoLuongTonTemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoLuongTonTemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
