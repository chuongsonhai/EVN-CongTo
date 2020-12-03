import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucTemDetailComponent } from './danhmuc-tem-detail.component';

describe('DanhmucTemDetailComponent', () => {
  let component: DanhmucTemDetailComponent;
  let fixture: ComponentFixture<DanhmucTemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucTemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucTemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
