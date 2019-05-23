import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.scss']
})
export class GoodsTableComponent implements OnChanges {
  @Input() source: any;
  @Output() dataChanged = new EventEmitter();
  name = null;
  count = null;
  selectedRow = null;
  displayedColumns: string[] = ['name', 'count'];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.source && !this.source) {
      this.source = [];
    }
  }

  add() {
    if (this.name && this.count) {
      this.source.push({
        name: this.name,
        count: this.count
      });
      this.name = null;
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
      this.selectedRow.name = this.name;
      this.selectedRow.count = this.count;
      this.source = [...this.source];
      this.name = null;
      this.count = null;
      this.selectedRow = null;
      this.dataChanged.next(this.source);
    }
  }

}
