import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import * as joint from 'jointjs';
import {dia} from 'jointjs';
import LinkView = dia.LinkView;
import {BlocksService, IBlock, ILink} from '../../../shared/services/blocks.service';

@Component({
  selector: 'app-redactor',
  templateUrl: './redactor.component.html',
  styleUrls: ['./redactor.component.scss']
})
export class RedactorComponent implements AfterViewInit, OnInit {

  constructor(private bs: BlocksService) {
  }

  graph: any;
  paper: any;
  @ViewChild('paperView') paperView;
  ctrlDownedYet = false;
  selectedBlock: IBlock;
  selectedLink: ILink;

  blocks: IBlock[] = [];
  links: ILink[] = [];

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
    if (block.classId === 4) {
      block.cell.attr({
        body: {
          fill: 'rgba(0,255,255,0.35)'
        },
        label: {
          text: 'Порт',
          fill: 'black'
        }
      });
    }
    if (block.classId === 5) {
      block.cell.attr({
        body: {
          fill: 'rgba(255,0,255,0.35)'
        },
        label: {
          text: 'Посредник',
          fill: 'black'
        }
      });
    }
    if (block.classId === 6) {
      block.cell.attr({
        body: {
          fill: 'rgba(255,255,0,0.35)'
        },
        label: {
          text: 'Потребитель',
          fill: 'black'
        }
      });
    }
  }

  ngOnInit(): void {
    this.blocks = [...this.bs.blocks];
    this.links = [...this.bs.links];
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
      validateConnection: (cellViewS, magnetS, cellViewT, magnetT, end) => {
        let view = (end === 'target' ? cellViewT : cellViewS);
        return !view.model.isLink();
      },
      interactive: (cellView, method) => {
        // разрешаем интерактивность только с линкблоками пока зажат контрол
        return !this.ctrlDownedYet || cellView instanceof LinkView;
      }
      // embeddingMode: true
    });
    // прогоняем массивы
    this.processAllBlocks();
    this.processAllLinks();

    this.startWatch();
  }

  startWatch() {
    // при изменении позиции чего-либо
    this.graph.on('change:position', (cell) => {
      // if (obstacles.indexOf(cell) > -1) this.paper.findViewByModel(link).update();
      // находим умные пути для всех дорог
      this.links.forEach(l => {
        this.paper.findViewByModel(l.cell).update();
      });
    });
    this.linking();
    this.deleting();
    // выбор элемента
    this.paper.on('cell:pointerclick', (cell) => {
      if (!this.ctrlDownedYet) {
        if (cell instanceof LinkView) {
          this.selectedBlock = null;
          this.selectedLink = this.links.find(l => l.cell === cell.model);
        } else {
          this.selectedLink = null;
          this.selectedBlock = this.blocks.find(b => b.cell === cell.model);
        }
      }
    });
  }

  linkingStarted = false;
  startCell = null;
  endCell = null;

  linking() {
    this.paper.on('cell:pointerclick', (cell) => {
      if (this.ctrlDownedYet && !(cell instanceof LinkView) && !this.linkingStarted) {
        this.linkingStarted = true;
        this.startCell = cell;
        return;
      }
      if (this.ctrlDownedYet && !(cell instanceof LinkView) && this.linkingStarted) {
        this.linkingStarted = false;
        this.endCell = cell;
        if (this.endCell !== this.startCell) {
          let startBlock = this.blocks.find(b => b.cell === this.startCell.model);
          let endBlock = this.blocks.find(b => b.cell === this.endCell.model);
          let existingLink = this.links.find(l =>
            l.from === startBlock.id && l.to === endBlock.id || l.to === startBlock.id && l.from === endBlock.id);
          if (!existingLink) {
            this.addLink(startBlock.id, endBlock.id);
          }
        }
        this.startCell = null;
        this.endCell = null;
        return;
      }
    });
  }

  deleting() {
    this.paper.on('cell:contextmenu', (cell) => {
      if (cell instanceof LinkView) {
        let fli = this.links.findIndex(l => l.cell === cell.model);
        if (fli > -1) {
          this.links.splice(fli, 1);
          cell.remove();
        }
      } else {
        let fb = this.blocks.find(b => b.cell === cell.model);
        if (fb) {
          let stayingLinks = [];
          let deletingLinks = [];
          this.links.forEach(l => {
            if (l.to === fb.id || l.from === fb.id) {
              deletingLinks.push(l);
            } else {
              stayingLinks.push(l);
            }
          });
          this.links = stayingLinks;
          deletingLinks.forEach(l => l.cell.remove());
          let fbi = this.blocks.findIndex(b => b === fb);
          this.blocks.splice(fbi, 1);
          fb.cell.remove();
        }
      }
    });
  }

  processBlock(block) {
    block.cell = new joint.shapes.standard.Rectangle();
    block.cell.position(block.x, block.y);
    block.cell.resize(105, 40);
    RedactorComponent.attrByClassId(block);
    this.graph.addCell(block.cell);
  }

  processAllBlocks() {
    if (this.blocks && this.blocks.length) {
      this.blocks.forEach(b => {
        this.processBlock(b);
      });
    }
  }

  processLink(link) {
    const sourceId = this.blocks.find(b => b.id === link.from).cell.id;
    const targetId = this.blocks.find(b => b.id === link.to).cell.id;
    link.cell = new joint.shapes.standard.Link({
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
    link.cell.attr('line/targetMarker', {
      type: 'circle', // SVG Circle
      fill: '#666',
      stroke: '#333',
      r: 2, // radius of the circle
      cx: 1 // move the centre of the circle 5 pixels from the end of the path
    });
    link.cell.attr('line/sourceMarker', {
      type: 'circle', // SVG Circle
      fill: '#666',
      stroke: '#333',
      r: 2, // radius of the circle
      cx: 1 // move the centre of the circle 5 pixels from the end of the path
    });
    this.graph.addCell(link.cell);
  }

  processAllLinks() {
    if (this.links && this.links.length) {
      this.links.forEach(l => {
        this.processLink(l);
      });
    }
  }

  addLink(from, to) {
    let id = 0;
    this.links.forEach(b => {
      if (b.id >= id) {
        id = b.id;
        id++;
      }
    });
    let link = {
      id,
      from,
      to
    };
    this.links.push(link);
    this.processLink(link);
    console.log('link added', link);
  }

  addBlock(classId) {
    let id = 0;
    this.blocks.forEach(b => {
      if (b.id >= id) {
        id = b.id;
        id++;
      }
    });
    let block = {
      id,
      classId,
      cell: null,
      x: 100,
      y: 100
    };
    this.blocks.push(block);
    this.processBlock(block);
    console.log('block added', block);
  }

  @HostListener('window:keyup', ['$event'])
  keyEventUp(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.ctrlDownedYet = false;
      this.blocks.forEach(b => {
          b.cell.attr({rect: {cursor: 'move'}});
        }
      );
      // принудительно заканчиваем создание линки
      this.linkingStarted = false;
      this.startCell = false;
      this.endCell = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  ctrlDown(event: KeyboardEvent) {
    if (event.key === 'Control') {
      if (!this.ctrlDownedYet) {
        this.ctrlDownedYet = true;
        this.blocks.forEach(b => {
            b.cell.attr({rect: {cursor: 'pointer'}});
          }
        );
      }
    }
  }

  save() {
    this.bs.save(this.blocks, this.links);
  }
}
