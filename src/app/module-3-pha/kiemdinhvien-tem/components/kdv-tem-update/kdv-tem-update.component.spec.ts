import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDVTemUpdateComponent } from './kdv-tem-update.component';

describe('KDVTemUpdateComponent', () => {
  let component: KDVTemUpdateComponent;
  let fixture: ComponentFixture<KDVTemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KDVTemUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KDVTemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
