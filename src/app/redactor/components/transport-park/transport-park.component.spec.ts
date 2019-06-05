import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportParkComponent } from './transport-park.component';

describe('TransportParkComponent', () => {
  let component: TransportParkComponent;
  let fixture: ComponentFixture<TransportParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
