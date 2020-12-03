import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyTemCreateComponent } from './nguoi-quan-ly-tem-create.component';

describe('NguoiQuanLyTemCreateComponent', () => {
  let component: NguoiQuanLyTemCreateComponent;
  let fixture: ComponentFixture<NguoiQuanLyTemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyTemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyTemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
