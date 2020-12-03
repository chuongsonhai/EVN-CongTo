import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhvienchiDeleteComponent } from './kiemdinhvienchi-delete.component';

describe('KiemdinhvienchiDeleteComponent', () => {
  let component: KiemdinhvienchiDeleteComponent;
  let fixture: ComponentFixture<KiemdinhvienchiDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhvienchiDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhvienchiDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
