import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
// import * as joint from 'jointjs/dist/joint';
import * as joint from 'jointjs';

@Component({
  selector: 'app-redactor',
  templateUrl: './redactor.component.html',
  styleUrls: ['./redactor.component.scss']
})
export class RedactorComponent implements OnInit, AfterViewInit {
  graph: any;
  paper: any;

  @ViewChild('paperView') paperView;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.graph = new joint.dia.Graph;
    this.paper = new joint.dia.Paper({
      el: this.paperView.nativeElement,
      model: this.graph,
      width: 1024,
      height: 1024,
      gridSize: 10,
      className: 'paper',
      drawGrid: true,
      defaultConnectionPoint: { name: 'anchor' },
      validateConnection: (cellViewS, magnetS, cellViewT, magnetT, end) => {
        let view = (end === 'target' ? cellViewT : cellViewS);
        return !view.model.isLink();
      },
      embeddingMode: true
    });

    // let paperScroller = new joint.ui.PaperScroller({
    //   autoResizePaper: true,
    //   padding: 50,
    //   paper: this.paper
    // });
    //
    // paperScroller.$el.appendTo(this.viewjoint.nativeElement);
    // paperScroller.center();

    let rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      }
    });
    this.graph.addCell(rect);

    let rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr('label/text', 'World!');
    this.graph.addCell(rect2);

    let link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    this.graph.addCell(link);
  }

}
