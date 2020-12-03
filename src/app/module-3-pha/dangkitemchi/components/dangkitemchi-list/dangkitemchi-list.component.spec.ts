import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkitemchiListComponent } from './dangkitemchi-list.component';

describe('DangkitemchiListComponent', () => {
  let component: DangkitemchiListComponent;
  let fixture: ComponentFixture<DangkitemchiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkitemchiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkitemchiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
