import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDVTemDeleteComponent } from './kdv-tem-delete.component';

describe('KDVTemDeleteComponent', () => {
  let component: KDVTemDeleteComponent;
  let fixture: ComponentFixture<KDVTemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KDVTemDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KDVTemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
