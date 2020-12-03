import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkitemchiUpdateComponent } from './dangkitemchi-update.component';

describe('DangkitemchiUpdateComponent', () => {
  let component: DangkitemchiUpdateComponent;
  let fixture: ComponentFixture<DangkitemchiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkitemchiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkitemchiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
