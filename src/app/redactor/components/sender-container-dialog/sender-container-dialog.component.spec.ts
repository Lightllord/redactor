import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderContainerDialogComponent } from './sender-container-dialog.component';

describe('SenderContainerDialogComponent', () => {
  let component: SenderContainerDialogComponent;
  let fixture: ComponentFixture<SenderContainerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderContainerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderContainerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
