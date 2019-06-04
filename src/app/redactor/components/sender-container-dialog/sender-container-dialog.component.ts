import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DictsService} from '../../../shared/services/dicts.service';
import {ParametersDialogComponent} from '../parameters-dialog/parameters-dialog.component';

@Component({
  selector: 'app-sender-container-dialog',
  templateUrl: './sender-container-dialog.component.html',
  styleUrls: ['./sender-container-dialog.component.scss']
})
export class SenderContainerDialogComponent implements OnInit {
  group: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog, public ds: DictsService,
              public dialogRef: MatDialogRef<ParametersDialogComponent>) {
    this.group = this.fb.group({container: null, count: null});
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.group.value);
  }

  contComp(c1, c2) {
    if (c1 && c2) {
      return c1.name === c2.name;
    } else {
      return false;
    }
  }
}
