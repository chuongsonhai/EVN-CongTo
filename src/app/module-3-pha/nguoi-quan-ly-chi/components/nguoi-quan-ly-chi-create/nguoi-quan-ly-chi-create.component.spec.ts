import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyChiCreateComponent } from './nguoi-quan-ly-chi-create.component';

describe('NguoiQuanLyChiCreateComponent', () => {
  let component: NguoiQuanLyChiCreateComponent;
  let fixture: ComponentFixture<NguoiQuanLyChiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyChiCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyChiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
