import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhviendaychiUpdateComponent } from './kiemdinhviendaychi-update.component';

describe('KiemdinhviendaychiUpdateComponent', () => {
  let component: KiemdinhviendaychiUpdateComponent;
  let fixture: ComponentFixture<KiemdinhviendaychiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhviendaychiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhviendaychiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
