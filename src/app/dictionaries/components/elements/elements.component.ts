import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DictDesc, DictDescField, DictsService} from '../../../shared/services/dicts.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit, OnDestroy, AfterViewInit {
  selectedRow;
  name;
  source;
  dataSource: MatTableDataSource<any>;
  desc: DictDesc;
  columnsFields: DictDescField[];
  columns: string[];
  form: FormGroup;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private ds: DictsService, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.selectedRow = null;
      this.name = p.get('name');
      this.desc = this.ds.getDesc(this.name);
      this.source = [...this.ds.dictionaryValues[this.name]];
      this.dataSource = new MatTableDataSource(this.source);
      this.columnsFields = this.desc.fields.filter(f => f.column);
      this.columns = this.columnsFields.map(f => f.name);
      this.genForm();
    });
  }

  selectRow(row) {
    if (row == this.selectedRow) {
      this.selectedRow = null;
      this.form.reset({});
    } else {
      this.selectedRow = row;
      this.form.reset(row);
    }
  }

  ngOnDestroy(): void {
  }

  genForm() {
    let formGen = {};
    this.desc.fields.forEach(el => {
      formGen[el.name] = null;
    });
    this.form = this.fb.group(formGen);
  }

  add() {
    this.ds.addToDict(this.name, this.form.value);
    this.selectedRow = null;
    this.form.reset({});
    this.source = [...this.ds.dictionaryValues[this.name]];
    this.dataSource = new MatTableDataSource(this.source);
    this.dataSource.sort = this.sort;
  }

  edit() {
    this.ds.change(this.name, this.selectedRow, this.form.value);
    this.selectedRow = null;
    this.form.reset({});
    this.source = [...this.ds.dictionaryValues[this.name]];
    this.dataSource = new MatTableDataSource(this.source);
    this.dataSource.sort = this.sort;
  }

  remove() {
    this.ds.remove(this.name, this.selectedRow);
    this.selectedRow = null;
    this.form.reset({});
    this.source = [...this.ds.dictionaryValues[this.name]];
    this.dataSource = new MatTableDataSource(this.source);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  dictComape(a, b): boolean {
    return a.name === b.name;
  }
}
