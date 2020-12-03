import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucTemDetailDialogComponent } from './danhmuc-tem-detail-dialog.component';

describe('DanhmucTemDetailDialogComponent', () => {
  let component: DanhmucTemDetailDialogComponent;
  let fixture: ComponentFixture<DanhmucTemDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucTemDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucTemDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
