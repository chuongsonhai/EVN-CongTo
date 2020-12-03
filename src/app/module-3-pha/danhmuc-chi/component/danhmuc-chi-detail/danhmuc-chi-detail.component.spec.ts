import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucChiDetailComponent } from './danhmuc-chi-detail.component';

describe('DanhmucChiDetailComponent', () => {
  let component: DanhmucChiDetailComponent;
  let fixture: ComponentFixture<DanhmucChiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucChiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucChiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
