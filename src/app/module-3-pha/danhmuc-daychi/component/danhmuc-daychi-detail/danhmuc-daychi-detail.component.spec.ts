import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucDaychiDetailComponent } from './danhmuc-daychi-detail.component';

describe('DanhmucDaychiDetailComponent', () => {
  let component: DanhmucDaychiDetailComponent;
  let fixture: ComponentFixture<DanhmucDaychiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucDaychiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucDaychiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
