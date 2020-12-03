import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucChiListComponent } from './danhmuc-chi-list.component';

describe('DanhmucChiListComponent', () => {
  let component: DanhmucChiListComponent;
  let fixture: ComponentFixture<DanhmucChiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucChiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucChiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
