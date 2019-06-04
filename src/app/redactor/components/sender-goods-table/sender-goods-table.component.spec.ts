import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderGoodsTableComponent } from './sender-goods-table.component';

describe('SenderGoodsTableComponent', () => {
  let component: SenderGoodsTableComponent;
  let fixture: ComponentFixture<SenderGoodsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderGoodsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderGoodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
