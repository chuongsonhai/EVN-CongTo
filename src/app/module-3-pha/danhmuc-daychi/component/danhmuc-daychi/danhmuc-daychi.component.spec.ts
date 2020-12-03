import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucDaychiComponent } from './danhmuc-daychi.component';

describe('DanhmucDaychiComponent', () => {
  let component: DanhmucDaychiComponent;
  let fixture: ComponentFixture<DanhmucDaychiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucDaychiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucDaychiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
