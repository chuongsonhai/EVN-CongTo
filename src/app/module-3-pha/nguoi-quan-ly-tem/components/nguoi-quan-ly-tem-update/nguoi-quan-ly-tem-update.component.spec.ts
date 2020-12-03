import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyTemUpdateComponent } from './nguoi-quan-ly-tem-update.component';

describe('NguoiQuanLyTemUpdateComponent', () => {
  let component: NguoiQuanLyTemUpdateComponent;
  let fixture: ComponentFixture<NguoiQuanLyTemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyTemUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyTemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
