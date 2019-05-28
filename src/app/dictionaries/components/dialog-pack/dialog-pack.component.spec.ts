import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPackComponent } from './dialog-pack.component';

describe('DialogPackComponent', () => {
  let component: DialogPackComponent;
  let fixture: ComponentFixture<DialogPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
