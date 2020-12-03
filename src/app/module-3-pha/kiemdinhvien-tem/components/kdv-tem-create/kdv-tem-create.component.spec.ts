import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDVTemCreateComponent } from './kdv-tem-create.component';

describe('KDVTemCreateComponent', () => {
  let component: KDVTemCreateComponent;
  let fixture: ComponentFixture<KDVTemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KDVTemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KDVTemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
