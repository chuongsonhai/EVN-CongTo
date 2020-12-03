import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDVTemListComponent } from './kdv-tem-list.component';

describe('KDVTemListComponent', () => {
  let component: KDVTemListComponent;
  let fixture: ComponentFixture<KDVTemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KDVTemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KDVTemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
