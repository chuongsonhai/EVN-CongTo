import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucChiDetailDialogComponent } from './danhmuc-chi-detail-dialog.component';

describe('DanhmucChiDetailDialogComponent', () => {
  let component: DanhmucChiDetailDialogComponent;
  let fixture: ComponentFixture<DanhmucChiDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucChiDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucChiDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
