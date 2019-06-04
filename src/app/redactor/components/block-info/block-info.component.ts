import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BlocksService, IBlock} from '../../../shared/services/blocks.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {take} from 'rxjs/operators';
import {ContainerDialogComponent} from '../container-dialog/container-dialog.component';
import {SenderContainerDialogComponent} from '../sender-container-dialog/sender-container-dialog.component';

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
  containers: any[] = [];

  get schedules(): FormArray {
    return this.formGroup.get('schedules') as FormArray;
  }

  constructor(private fb: FormBuilder, private bs: BlocksService, public dialog: MatDialog) {
    this.formGroup = this.fb.group({
      name: null,
      mat: null,
      disp: null,
      rop: null,
      costService: null,
      serviceTime: null,
      workType: null,
      workDuration: null,
      workCost: null,
      workCostRestart: null,
      workDurationRestart: null
    });
    //this.block.info.containers
  }

  workTypes = ['Постоянное', 'Прерываемое'];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.lookChange) {
      this.lookChange.unsubscribe();
    }
    if (changes.block && this.block) {
      if (!this.block.info) {
        this.block.info = {};
      }
      if (this.block.info.containers) {
        this.containers = this.block.info.containers;
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
    Object.assign(this.block.info, this.formGroup.value);
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
        let gr = this.fb.group({
          blockTo: e.blockTo,
          timeFrom: e.timeFrom,
          period: e.period,
          containers: e.containers
        });
        gr.get('containers').setValue(e.containers);
        return gr;
      }))
    );

    // this.formGroup.get('name').setValue(this.block.info.name);
    Object.assign(this.block.info, this.formGroup.value);
    // this.block.info = this.formGroup.value;
    this.blockChanged.next(this.block);
  }

  delPack(schId, packId) {
    let vls = this.schedules.controls[schId].value;
    let cont = vls.containers;
    cont.splice(packId, 1);
    vls.containers = cont;
    this.schedules.get(`${schId}`).setValue(vls);
  }

  addPack(schId) {
    this.dialog.open(ContainerDialogComponent, {
      width: '300px'
    }).afterClosed().pipe(take(1)).subscribe(res => {
      if (res && res.container && res.count && res.price) {
        let vls = this.schedules.get(`${schId}`).value;
        let cont = vls.containers;
        if (cont && cont.length) {
          cont.push(res);
          vls.containers = cont;
          this.schedules.get(`${schId}`).setValue(vls);
        } else {
          vls.containers = [res];
          this.schedules.get(`${schId}`).setValue(vls);
        }
      }
    });
  }

  delContainer(ind) {
    this.containers.splice(ind, 1);
    this.containers = [...this.containers];
  }

  addContainer() {
    this.dialog.open(SenderContainerDialogComponent, {
      width: '300px'
    }).afterClosed().pipe(take(1)).subscribe(res => {
      if (res && res.container && res.count) {
        this.containers.push(res);
        this.containers = [...this.containers];
      }
    });
  }
}
