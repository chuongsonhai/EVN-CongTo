import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyTemDeleteComponent } from './nguoi-quan-ly-tem-delete.component';

describe('NguoiQuanLyTemDeleteComponent', () => {
  let component: NguoiQuanLyTemDeleteComponent;
  let fixture: ComponentFixture<NguoiQuanLyTemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyTemDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyTemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
