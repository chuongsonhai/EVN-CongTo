import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucTemListComponent } from './danhmuc-tem-list.component';

describe('DanhmucTemListComponent', () => {
  let component: DanhmucTemListComponent;
  let fixture: ComponentFixture<DanhmucTemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucTemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucTemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
