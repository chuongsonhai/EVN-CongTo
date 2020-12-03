import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhvienchiCreateComponent } from './kiemdinhvienchi-create.component';

describe('KiemdinhvienchiCreateComponent', () => {
  let component: KiemdinhvienchiCreateComponent;
  let fixture: ComponentFixture<KiemdinhvienchiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhvienchiCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhvienchiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
