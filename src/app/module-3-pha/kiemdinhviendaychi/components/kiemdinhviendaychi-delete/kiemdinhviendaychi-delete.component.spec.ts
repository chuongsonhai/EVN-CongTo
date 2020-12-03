import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhviendaychiDeleteComponent } from './kiemdinhviendaychi-delete.component';

describe('KiemdinhviendaychiDeleteComponent', () => {
  let component: KiemdinhviendaychiDeleteComponent;
  let fixture: ComponentFixture<KiemdinhviendaychiDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhviendaychiDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhviendaychiDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
