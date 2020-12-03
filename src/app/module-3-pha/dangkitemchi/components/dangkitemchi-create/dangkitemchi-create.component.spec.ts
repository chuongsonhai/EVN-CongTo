import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkitemchiCreateComponent } from './dangkitemchi-create.component';

describe('DangkitemchiCreateComponent', () => {
  let component: DangkitemchiCreateComponent;
  let fixture: ComponentFixture<DangkitemchiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkitemchiCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkitemchiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
