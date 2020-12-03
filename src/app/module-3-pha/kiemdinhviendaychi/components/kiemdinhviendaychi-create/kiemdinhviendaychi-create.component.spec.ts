import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhviendaychiCreateComponent } from './kiemdinhviendaychi-create.component';

describe('KiemdinhviendaychiCreateComponent', () => {
  let component: KiemdinhviendaychiCreateComponent;
  let fixture: ComponentFixture<KiemdinhviendaychiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhviendaychiCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhviendaychiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
