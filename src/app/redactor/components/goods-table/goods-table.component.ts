import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DictsService} from '../../../shared/services/dicts.service';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.scss']
})
export class GoodsTableComponent implements OnChanges, OnInit {
  @Input() source: any;
  @Output() dataChanged = new EventEmitter();
  product = null;
  name = null;
  count = null;
  selectedRow = null;
  displayedColumns: string[] = ['product', 'count'];
  goods;

  constructor(private ds: DictsService) {
  }

  ngOnInit() {
    this.goods = this.ds.getDictVals('goods');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.source && !this.source) {
      this.source = [];
    }
  }

  add() {
    if (this.product && this.count) {
      this.source.push({
        product: this.product,
        count: this.count
      });
      this.product = null;
      this.count = null;
      this.source = [...this.source];
      this.dataChanged.next(this.source);
    }
  }

  selectRow(e) {
    if (this.selectedRow === e) {
      this.selectedRow = null;
      this.name = null;
      this.count = null;
    } else {
      this.selectedRow = e;
      this.name = e.name;
      this.count = e.count;
    }
  }

  change() {
    if (this.name && this.count) {
      this.selectedRow.product = this.product;
      this.selectedRow.count = this.count;
      this.source = [...this.source];
      this.name = null;
      this.count = null;
      this.selectedRow = null;
      this.dataChanged.next(this.source);
    }
  }

  del() {
    const foundInd = this.source.findIndex(s => s === this.selectedRow);
    this.source.splice(foundInd, 1);
    this.selectedRow = null;
    this.name = null;
    this.count = null;
    this.source = [...this.source];
    this.dataChanged.next(this.source);
  }
}
