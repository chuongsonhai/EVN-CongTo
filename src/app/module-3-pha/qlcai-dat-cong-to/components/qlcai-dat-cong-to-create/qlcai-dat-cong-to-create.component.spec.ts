import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLCaiDatCongToCreateComponent } from './qlcai-dat-cong-to-create.component';

describe('QLCaiDatCongToCreateComponent', () => {
  let component: QLCaiDatCongToCreateComponent;
  let fixture: ComponentFixture<QLCaiDatCongToCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLCaiDatCongToCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QLCaiDatCongToCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
