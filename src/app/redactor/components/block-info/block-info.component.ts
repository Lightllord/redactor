import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BlocksService, IBlock} from '../../../shared/services/blocks.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {DialogPackComponent} from '../../../dictionaries/components/dialog-pack/dialog-pack.component';
import {take} from 'rxjs/operators';
import {PackDialogComponent} from '../pack-dialog/pack-dialog.component';

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.scss']
})
export class BlockInfoComponent implements OnChanges {
  // block.info.schedule
  @Input() block: IBlock;
  @Output() blockChanged = new EventEmitter();
  formGroup: FormGroup;
  lookChange: Subscription;

  get schedules(): FormArray {
    return this.formGroup.get('schedules') as FormArray;
  }

  constructor(private fb: FormBuilder, private bs: BlocksService, public dialog: MatDialog) {
    this.formGroup = this.fb.group({
      name: null
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.lookChange) {
      this.lookChange.unsubscribe();
    }
    if (changes.block && this.block) {
      if (!this.block.info) {
        this.block.info = {};
      }
      this.formGroup.reset(this.block.info);
      if (this.block.classId === 1 || this.block.classId === 3 || this.block.classId === 4) {
        this.makeSchedule();
      }
    }
  }

  goodsInChanges(e) {
    this.block.info.goodsIn = e;
    this.blockChanged.next(this.block);
  }

  goodsOutChanges(e) {
    this.block.info.goodsOut = e;
    this.blockChanged.next(this.block);
  }

  save() {
    this.block.info = this.formGroup.value;
    this.blockChanged.next(this.block);
  }

  makeSchedule() {
    let existed = this.block.info.schedules || [];
    let connected = [];
    this.bs.links.forEach(l => {
      if (l.from === this.block.id) {
        let blc = this.bs.blocks.find(b => b.id === l.to);
        if (blc.classId === 1 || blc.classId === 3 || blc.classId === 4) {
          connected.push(blc);
        }
      }
      if (l.to === this.block.id) {
        let blc = this.bs.blocks.find(b => b.id === l.from);
        if (blc.classId === 1 || blc.classId === 3 || blc.classId === 4) {
          connected.push(blc);
        }
      }
    });
    existed = existed.filter(sh => {
      return !!connected.find(c => c.id === sh.blockTo.id);
    });
    connected.filter(c => !existed.find(e => e.blockTo.id === c.id)).forEach(c => {
      existed.push({
        blockTo: c,
        timeFrom: null,
        period: null,
        containers: []
      });
    });
    this.formGroup.setControl('schedules',
      new FormArray(existed.map(e => {
        return this.fb.group({
          blockTo: e.blockTo,
          timeFrom: e.timeFrom,
          period: e.period,
          containers: e.containers
        });
      }))
    );
    // this.formGroup.get('name').setValue(this.block.info.name);
    Object.assign(this.block.info, this.formGroup.value);
    // this.block.info = this.formGroup.value;
    this.blockChanged.next(this.block);
  }

  delPack(containerId, packId) {

  }

  addPack() {
    const dialogRef = this.dialog.open(PackDialogComponent, {
      width: '300px'
    }).afterClosed().pipe(take(1)).subscribe(res => {
    });
  }
}
