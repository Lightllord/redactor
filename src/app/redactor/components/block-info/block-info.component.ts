import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IBlock} from '../../../shared/services/blocks.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.scss']
})
export class BlockInfoComponent implements OnChanges {
  @Input() block: IBlock;
  @Output() blockChanged = new EventEmitter();
  formGroup: FormGroup;
  lookChange: Subscription;
  containerCount;
  containerVal;
  containerWeight;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: null,
      containerCount: null,
      containerVal: null,
      containerWeight: null
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.lookChange) {
      this.lookChange.unsubscribe();
    }
    if (changes.block && this.block && !this.block.info) {
      this.block.info = {};
    }
    this.formGroup.reset(this.block.info);
    this.lookChange = this.formGroup.valueChanges.pipe(debounceTime(350)).subscribe(
      res => {
        this.block.info = {...this.block.info, ...res};
        this.blockChanged.next(this.block);
      }
    );
  }

  goodsInChanges(e) {
    this.block.info.goodsIn = e;
    this.blockChanged.next(this.block);
  }

  goodsOutChanges(e) {
    this.block.info.goodsOut = e;
    this.blockChanged.next(this.block);
  }
}
