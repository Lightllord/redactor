import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements OnChanges {
  @Input() info;

  constructor() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.info.loaders) {
      this.info.loaders = {
        avia: null,
        aviaDuration: null,
        zd: null,
        zdDuration: null,
        avto: null,
        avtoDuration: null,
        sudo: null,
        sudoDuration: null
      };
    }
  }

}
