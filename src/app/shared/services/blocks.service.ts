import {Injectable} from '@angular/core';

export interface IBlock {
  id: number;
  classId: number;
  cell?: any;
  x?: number;
  y?: number;
  info?: any;
  html?: any;
}

export interface ILink {
  id: number;
  from: number;
  to: number;
  cell?: any;
  info?: any;
}

// <ng-container *ngSwitchCase="1">Вокзал</ng-container>
// <ng-container *ngSwitchCase="2">Поставщик</ng-container>
// <ng-container *ngSwitchCase="3">Аэропорт</ng-container>
// <ng-container *ngSwitchCase="4">Порт</ng-container>
// <ng-container *ngSwitchCase="5">Посрденик</ng-container>
// <ng-container *ngSwitchCase="6">Потребитель</ng-container>

@Injectable({
  providedIn: 'root'
})
export class BlocksService {
  blocks: IBlock[] = [
    {
      id: 0,
      classId: 2,
      cell: null,
      x: 120,
      y: 220,
      info: {
        goodsOut: [
          {
            name: 'Вкусняхи',
            count: 1000
          }
        ]
      }
    },
    {
      id: 1,
      classId: 5,
      cell: null,
      x: 520,
      y: 220,
      info: {
        goodsIn: [
          {
            name: 'Вкусняхи',
            count: 100
          }
        ],
        goodsOut: [
          {
            name: 'Вкусняхи',
            count: 100
          }
        ]
      }
    },
    {
      id: 2,
      classId: 3,
      cell: null,
      x: 320,
      y: 240,
    },
    {
      id: 3,
      classId: 6,
      cell: null,
      x: 870,
      y: 130,
      info: {
        goodsIn: [
          {
            name: 'Вкусняхи',
            count: 70
          }
        ]
      }
    },
    {
      id: 4,
      classId: 6,
      cell: null,
      x: 870,
      y: 290,
      info: {
        goodsIn: [
          {
            name: 'Вкусняхи',
            count: 30
          }
        ]
      }
    },
    {
      id: 5,
      classId: 3,
      cell: null,
      x: 520,
      y: 100,
      info: {
        name: 'Гондольерский'
      }
    }
  ];

  links: ILink[] = [
    {
      id: 0,
      from: 0,
      to: 2,
      cell: null,
    },
    {
      id: 1,
      from: 2,
      to: 1,
      cell: null
    },
    {
      id: 2,
      from: 1,
      to: 3,
      cell: null
    },
    {
      id: 3,
      from: 1,
      to: 4,
      cell: null
    },
    {
      id: 4,
      from: 2,
      to: 5,
      cell: null
    }
  ];

  constructor() {
  }

  save(bs: IBlock[], ls: ILink[]) {
    this.blocks = bs.map(b => {
      if (b.cell && b.cell.attributes && b.cell.attributes.position) {
        b.x = b.cell.attributes.position.x;
        b.y = b.cell.attributes.position.y;
      }
      b.cell = null;
      b.html = null;
      return b;
    });
    this.links = [...ls];
  }
}
