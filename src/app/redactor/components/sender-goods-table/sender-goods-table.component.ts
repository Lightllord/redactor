import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DictsService} from '../../../shared/services/dicts.service';

@Component({
  selector: 'app-sender-goods-table',
  templateUrl: './sender-goods-table.component.html',
  styleUrls: ['./sender-goods-table.component.scss']
})
export class SenderGoodsTableComponent implements OnInit, OnChanges {
  @Input() source: any;
  @Output() dataChanged = new EventEmitter();
  count = null;
  selectedRow = null;
  displayedColumns: string[] = ['product', 'pack'];
  goods;
  form: FormGroup;

  constructor(private fb: FormBuilder, private ds: DictsService) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      product: null,
      pack: null
    });
    this.goods = this.ds.getDictVals('goods');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.source && !this.source) {
      this.source = [];
      if (this.form) {
        this.form.reset({});
      }
    }
  }

  compareSelect = (a, b) => {
    if (a && b) {
      return a.name === b.name;
    } else {
      return false;
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

  getPacks(): any[] {
    let vals = this.form.get('product').value;
    if (vals && vals.packs) {
      return vals.packs;
    } else {
      return [];
    }
  }

  addRow() {
    if (this.form.value && this.form.value.product && this.form.value.pack) {
      this.source.push(this.form.value);
      this.form.reset({});
      this.source = [...this.source];
      this.dataChanged.next(this.source);
    }
  }

  changeRow() {
    if (this.form.value && this.form.value.product && this.form.value.pack) {
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
