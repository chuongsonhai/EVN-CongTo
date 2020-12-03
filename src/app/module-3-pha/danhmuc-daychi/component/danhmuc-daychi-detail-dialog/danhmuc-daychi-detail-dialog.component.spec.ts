import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucDaychiDetailDialogComponent } from './danhmuc-daychi-detail-dialog.component';

describe('DanhmucDaychiDetailDialogComponent', () => {
  let component: DanhmucDaychiDetailDialogComponent;
  let fixture: ComponentFixture<DanhmucDaychiDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucDaychiDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucDaychiDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
