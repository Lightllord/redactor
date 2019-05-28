import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DictDesc, DictDescField, DictsService} from '../../../shared/services/dicts.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {ParametersDialogComponent} from '../../../redactor/components/parameters-dialog/parameters-dialog.component';
import {DialogPackComponent} from '../dialog-pack/dialog-pack.component';
import {take} from 'rxjs/operators';

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


  constructor(private ds: DictsService, private route: ActivatedRoute, private fb: FormBuilder, public dialog: MatDialog) {
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
      this.dataSource.sort = this.sort;
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

  addPack() {
    const dialogRef = this.dialog.open(DialogPackComponent, {
      width: '300px'
    }).afterClosed().pipe(take(1)).subscribe(res => {
      if (res.name && res.count) {
        let packs = this.form.value.packs;
        if (!packs) {
          this.form.get('packs').setValue([res]);
        } else {
          packs.push(res);
          this.form.get('packs').setValue(packs);
        }
      }
    });
  }

  delPack(ind) {
    let packs = this.form.value.packs;
    packs.splice(ind, 1);
    this.form.get('packs').setValue(packs);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  dictComape(a, b): boolean {
    if (a && b) {
      return a.name === b.name;
    } else {
      return false;
    }
  }
}
