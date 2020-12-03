import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiQuanLyTemListComponent } from './nguoi-quan-ly-tem-list.component';

describe('NguoiQuanLyTemListComponent', () => {
  let component: NguoiQuanLyTemListComponent;
  let fixture: ComponentFixture<NguoiQuanLyTemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiQuanLyTemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiQuanLyTemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
