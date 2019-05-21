import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
import * as joint from 'jointjs';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-redactor',
  templateUrl: './redactor.component.html',
  styleUrls: ['./redactor.component.scss']
})
export class RedactorComponent implements AfterViewInit {

  constructor() {
  }

  graph: any;
  paper: any;
  @ViewChild('paperView') paperView;

  blocks: any[] = [
    {
      id: 1,
      classId: 1,
      cell: null,
      x: 300,
      y: 300
    },
    {
      id: 2,
      classId: 2,
      cell: null,
      x: 400,
      y: 360
    }
  ];

  links = [
    {
      id: 1,
      from: 2,
      to: 1,
      cell: null
    }
  ];

  static attrByClassId(block) {
    if (block.classId === 1) {
      block.cell.attr({
        body: {
          fill: 'rgba(0,0,0,0.35)'
        },
        label: {
          text: 'Вокзал',
          fill: 'black'
        }
      });
    }
    if (block.classId === 2) {
      block.cell.attr({
        body: {
          fill: 'rgba(255,0,0,0.35)'
        },
        label: {
          text: 'Поставщик',
          fill: 'black'
        }
      });
    }
    if (block.classId === 3) {
      block.cell.attr({
        body: {
          fill: 'rgba(0,0,255,0.35)'
        },
        label: {
          text: 'Аэропорт',
          fill: 'black'
        }
      });
    }
  }

  ngAfterViewInit(): void {
    // создаем граф и лист для него
    this.graph = new joint.dia.Graph;
    this.paper = new joint.dia.Paper({
      el: this.paperView.nativeElement,
      model: this.graph,
      width: 1024,
      height: 800,
      gridSize: 10,
      className: 'paper',
      drawGrid: true,
      // defaultConnectionPoint: {name: 'anchor'},
      validateConnection: (cellViewS, magnetS, cellViewT, magnetT, end) => {
        let view = (end === 'target' ? cellViewT : cellViewS);
        return !view.model.isLink();
      },
      // embeddingMode: true
    });
    // прогоняем массивы
    this.processAllBlocks();
    this.processAllLinks();

    // при изменении позиции чего-либо
    this.graph.on('change:position', (cell) => {
      // if (obstacles.indexOf(cell) > -1) this.paper.findViewByModel(link).update();
      // находим умные пути для всех дорог
      this.links.forEach(l => {
        this.paper.findViewByModel(l.cell).update();
      });
    });
    fromEvent(this.paperView.nativeElement, 'keydown').pipe(debounceTime(100)).subscribe(res => {
      console.log('ohMyGOd', res);
    });
  }

  processBlock(block) {
    block.cell = new joint.shapes.standard.Rectangle();
    block.cell.position(block.x, block.y);
    block.cell.resize(120, 40);
    RedactorComponent.attrByClassId(block);
    this.graph.addCell(block.cell);
    console.log(block.cell);
  }

  processAllBlocks() {
    if (this.blocks && this.blocks.length) {
      this.blocks.forEach(b => {
        this.processBlock(b);
      });
    }
  }

  processLink(link) {
  }

  processAllLinks() {
    if (this.links && this.links.length) {
      this.links.forEach(l => {
        const sourceId = this.blocks.find(b => b.id === l.from).cell.id;
        const targetId = this.blocks.find(b => b.id === l.to).cell.id;
        l.cell = new joint.shapes.standard.Link({
          source: {id: sourceId},
          target: {id: targetId},
          router: {name: 'manhattan'},
          connector: {name: 'rounded'},
          attrs: {
            line: {
              stroke: '#444444',
              strokeWidth: 2
            }
          }
        });
        l.cell.attr('line/targetMarker', {
          type: 'circle', // SVG Circle
          fill: '#666',
          stroke: '#333',
          r: 2, // radius of the circle
          cx: 1 // move the centre of the circle 5 pixels from the end of the path
        });
        l.cell.attr('line/sourceMarker', {
          type: 'circle', // SVG Circle
          fill: '#666',
          stroke: '#333',
          r: 2, // radius of the circle
          cx: 1 // move the centre of the circle 5 pixels from the end of the path
        });
        this.graph.addCell(l.cell);
        // l.cell.toBack();

        console.log(l.cell);
      });
    }
  }

  addBlock(classId) {
    let block = {
      classId,
      cell: null,
      x: 100,
      y: 100
    };
    this.blocks.push(block);
    this.processBlock(block);
  }

  @HostListener('window:keyup', ['$event'])
  keyEventUp(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.ctrlDownedYet = false;
      this.blocks.forEach(b => {
          b.cell.attr({rect: {cursor: 'move'}});
        }
      );
    }
  }

  ctrlDownedYet = false;

  @HostListener('window:keydown', ['$event'])
  ctrlDown(event: KeyboardEvent) {
    if (event.key === 'Control') {
      if (!this.ctrlDownedYet) {
        this.ctrlDownedYet = true;
        this.blocks.forEach(b => {
            b.cell.attr({rect: {cursor: 'pointer'}});
            b.cell.stopTransitions();
          }
        );
      }
    }

  }
}
