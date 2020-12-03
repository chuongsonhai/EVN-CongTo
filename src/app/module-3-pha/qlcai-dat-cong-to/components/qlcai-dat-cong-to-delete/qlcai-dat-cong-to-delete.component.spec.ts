import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLCaiDatCongToDeleteComponent } from './qlcai-dat-cong-to-delete.component';

describe('QLCaiDatCongToDeleteComponent', () => {
  let component: QLCaiDatCongToDeleteComponent;
  let fixture: ComponentFixture<QLCaiDatCongToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLCaiDatCongToDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QLCaiDatCongToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
