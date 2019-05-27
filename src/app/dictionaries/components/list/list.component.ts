import {Component, OnInit} from '@angular/core';
import {DictsService} from '../../../shared/services/dicts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(public ds: DictsService) {
  }

  ngOnInit() {
  }

}
