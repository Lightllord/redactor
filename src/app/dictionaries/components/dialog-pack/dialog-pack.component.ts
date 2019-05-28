import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ParametersService} from '../../../shared/services/parameters.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ParametersDialogComponent} from '../../../redactor/components/parameters-dialog/parameters-dialog.component';

@Component({
  selector: 'app-dialog-pack',
  templateUrl: './dialog-pack.component.html',
  styleUrls: ['./dialog-pack.component.scss']
})
export class DialogPackComponent implements OnInit {
  group: FormGroup;

  constructor(public ps: ParametersService, private fb: FormBuilder, public dialog: MatDialog,
              public dialogRef: MatDialogRef<ParametersDialogComponent>) {
    this.group = this.fb.group({name: null, count: null, width: null, length: null, height: null});
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.group.value);
  }

}
