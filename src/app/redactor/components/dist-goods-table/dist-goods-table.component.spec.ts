import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistGoodsTableComponent } from './dist-goods-table.component';

describe('DistGoodsTableComponent', () => {
  let component: DistGoodsTableComponent;
  let fixture: ComponentFixture<DistGoodsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistGoodsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistGoodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
