import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyChiDeleteComponent } from './nguoi-quan-ly-chi-delete.component';

describe('NguoiQuanLyChiDeleteComponent', () => {
  let component: NguoiQuanLyChiDeleteComponent;
  let fixture: ComponentFixture<NguoiQuanLyChiDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyChiDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyChiDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
