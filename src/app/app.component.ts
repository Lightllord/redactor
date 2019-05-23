import {Component} from '@angular/core';
import * as joint from 'jointjs';
import {dia} from 'jointjs';
import LinkView = dia.LinkView;
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    let shapes: any = joint.shapes;
  }

  title = 'redactor';
}
