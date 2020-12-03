import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLCaiDatCongToListComponent } from './qlcai-dat-cong-to-list.component';

describe('QLCaiDatCongToListComponent', () => {
  let component: QLCaiDatCongToListComponent;
  let fixture: ComponentFixture<QLCaiDatCongToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLCaiDatCongToListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QLCaiDatCongToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
