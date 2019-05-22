import {Component, Input, OnInit} from '@angular/core';
import {IBlock} from '../../../shared/services/blocks.service';

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.scss']
})
export class BlockInfoComponent implements OnInit {
  @Input() block: IBlock;

  constructor() { }

  ngOnInit() {
  }

}
