import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucDaychiListComponent } from './danhmuc-daychi-list.component';

describe('DanhmucDaychiListComponent', () => {
  let component: DanhmucDaychiListComponent;
  let fixture: ComponentFixture<DanhmucDaychiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucDaychiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucDaychiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
