import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhviendaychiListComponent } from './kiemdinhviendaychi-list.component';

describe('KiemdinhviendaychiListComponent', () => {
  let component: KiemdinhviendaychiListComponent;
  let fixture: ComponentFixture<KiemdinhviendaychiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhviendaychiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhviendaychiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
