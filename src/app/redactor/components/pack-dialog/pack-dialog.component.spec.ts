import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackDialogComponent } from './pack-dialog.component';

describe('PackDialogComponent', () => {
  let component: PackDialogComponent;
  let fixture: ComponentFixture<PackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
