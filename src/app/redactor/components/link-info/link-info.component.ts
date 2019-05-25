import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-link-info',
  templateUrl: './link-info.component.html',
  styleUrls: ['./link-info.component.scss']
})
export class LinkInfoComponent implements OnChanges {
  @Input() link;
  form: FormGroup;
  types = ['Ж/Д', 'Авиаперевозки', 'Судоперевозки'];
  sub: Subscription;
  selectedRow;
  type;
  path;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: null,
      path: null
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  add() {
    if (this.type) {
      this.link.info.paths.push({type: this.type, path: this.path});
      this.selectedRow = null;
      this.type = null;
      this.path = null;
    }
  }

  change() {
    if (this.type) {
      this.selectedRow.type = this.type;
      this.selectedRow.path = this.path;
      this.selectedRow = null;
      this.path = null;
      this.type = null;
    }
  }

  delet(i) {
    this.link.info.paths.splice(i, 1);
    this.selectedRow = null;
    this.type = null;
    this.path = null;
  }

  select(row) {
    if (this.selectedRow === row) {
      this.selectedRow = null;
      this.path = null;
      this.type = null;
    } else {
      this.selectedRow = row;
      this.path = this.selectedRow.path;
      this.type = this.selectedRow.type;
    }
  }
}
