import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyChiListComponent } from './nguoi-quan-ly-chi-list.component';

describe('NguoiQuanLyChiListComponent', () => {
  let component: NguoiQuanLyChiListComponent;
  let fixture: ComponentFixture<NguoiQuanLyChiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyChiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyChiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
