import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyChiUpdateComponent } from './nguoi-quan-ly-chi-update.component';

describe('NguoiQuanLyChiUpdateComponent', () => {
  let component: NguoiQuanLyChiUpdateComponent;
  let fixture: ComponentFixture<NguoiQuanLyChiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyChiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyChiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
