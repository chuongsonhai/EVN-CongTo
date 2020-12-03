import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLCaiDatCongToUpdateComponent } from './qlcai-dat-cong-to-update.component';

describe('QLCaiDatCongToUpdateComponent', () => {
  let component: QLCaiDatCongToUpdateComponent;
  let fixture: ComponentFixture<QLCaiDatCongToUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLCaiDatCongToUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QLCaiDatCongToUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
