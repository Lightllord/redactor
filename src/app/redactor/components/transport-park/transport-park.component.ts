import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DictsService} from '../../../shared/services/dicts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-transport-park',
  templateUrl: './transport-park.component.html',
  styleUrls: ['./transport-park.component.scss']
})
export class TransportParkComponent implements OnInit, OnChanges {
  @Input() source: any;
  @Output() dataChanged = new EventEmitter();
  selectedRow = null;
  displayedColumns: string[] = ['transport', 'container', 'count'];
  transports = [];
  containers = [];
  form: FormGroup;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private ds: DictsService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      transport: null,
      container: null,
      count: null
    });
    this.transports = this.ds.getDictVals('transports');
    this.containers = this.ds.getDictVals('containers');
    this.subscription = this.form.get('transport').valueChanges.subscribe(res => {
      if (res) {
        this.form.get('container').setValue(null);
        this.containers = this.ds.getDictVals('containers').filter(c => {
          if (c.type) {
            return c.type.name === res.name;
          } else {
            return false;
          }
        });
      } else {
        this.containers = this.ds.getDictVals('containers');
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
    if (changes.source && !this.source) {
      this.source = [];
      if (this.form) {
        this.form.reset({});
        // this.subscription = this.form.get('transport').valueChanges.subscribe(res => {
        //   this.form.get('container').setValue(null);
        //   if (res) {
        //     this.containers = this.ds.getDictVals('containers').filter(c => {
        //       if (c.type) {
        //         return c.type.name === res.name;
        //       } else {
        //         return false;
        //       }
        //     });
        //   } else {
        //     this.containers = [];
        //   }
        // });
      }
    }
  }

  compareSelect = (a, b) => {
    if (a && b) {
      return a.name === b.name;
    } else {
      return false;
    }
  };

  getContainers(): any[] {
    let vals = this.form.get('transport').value;
    if (vals) {
      return this.ds.getDictVals('containers').filter(c => {
        if (c.type) {
          return c.type.name === vals.name;
        } else {
          return false;
        }
      });
    } else {
      return [];
    }
  }

  selectRow(e) {
    if (this.selectedRow === e) {
      this.selectedRow = null;
      this.form.reset({});
    } else {
      this.selectedRow = e;
      this.form.reset(this.selectedRow);
    }
  }

  addRow() {
    if (this.form.value && this.form.value.transport) {
      this.source.push(this.form.value);
      this.form.reset({});
      this.source = [...this.source];
      this.dataChanged.next(this.source);
    }
  }

  changeRow() {
    if (this.form.value && this.form.value.transport) {
      Object.assign(this.selectedRow, this.form.value);
      this.form.reset({});
      this.selectedRow = null;
      this.source = [...this.source];
      this.dataChanged.next(this.source);
    }
  }

  deleteRow() {
    const foundInd = this.source.findIndex(s => s === this.selectedRow);
    this.source.splice(foundInd, 1);
    this.form.reset({});
    this.selectedRow = null;
    this.source = [...this.source];
    this.dataChanged.next(this.source);
  }
}
