import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemdinhvienchiListComponent } from './kiemdinhvienchi-list.component';

describe('KiemdinhvienchiListComponent', () => {
  let component: KiemdinhvienchiListComponent;
  let fixture: ComponentFixture<KiemdinhvienchiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemdinhvienchiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemdinhvienchiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
