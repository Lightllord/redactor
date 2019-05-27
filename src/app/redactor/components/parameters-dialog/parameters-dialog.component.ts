import {Component, Inject, OnInit} from '@angular/core';
import {ParametersService} from '../../../shared/services/parameters.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-parameters-dialog',
  templateUrl: './parameters-dialog.component.html',
  styleUrls: ['./parameters-dialog.component.scss']
})
export class ParametersDialogComponent implements OnInit {
  group: FormGroup;

  constructor(public ps: ParametersService, private fb: FormBuilder,
              public dialogRef: MatDialogRef<ParametersDialogComponent>) {
    this.group = this.fb.group({modelTimeUnit: null, simulationDuration: null});
  }

  ngOnInit() {
    this.group.reset(this.ps.parameters);
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.ps.parameters = this.group.value;
    if (!this.ps.parameters.simulationDuration) {
      this.ps.parameters.simulationDuration = 1;
    }
    this.dialogRef.close(this.ps.parameters);
  }
}
