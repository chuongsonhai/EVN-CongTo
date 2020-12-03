import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginCapquyenComponent } from './admin-login-capquyen.component';

describe('AdminLoginCapquyenComponent', () => {
  let component: AdminLoginCapquyenComponent;
  let fixture: ComponentFixture<AdminLoginCapquyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginCapquyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginCapquyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
