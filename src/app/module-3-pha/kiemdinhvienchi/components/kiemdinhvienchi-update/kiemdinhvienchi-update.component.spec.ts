import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhvienchiUpdateComponent } from './kiemdinhvienchi-update.component';

describe('KiemdinhvienchiUpdateComponent', () => {
  let component: KiemdinhvienchiUpdateComponent;
  let fixture: ComponentFixture<KiemdinhvienchiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhvienchiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhvienchiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
