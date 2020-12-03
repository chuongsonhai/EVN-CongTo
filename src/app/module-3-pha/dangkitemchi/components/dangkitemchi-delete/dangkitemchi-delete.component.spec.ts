import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkitemchiDeleteComponent } from './dangkitemchi-delete.component';

describe('DangkitemchiDeleteComponent', () => {
  let component: DangkitemchiDeleteComponent;
  let fixture: ComponentFixture<DangkitemchiDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkitemchiDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkitemchiDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
