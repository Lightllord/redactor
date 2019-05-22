import {Injectable} from '@angular/core';

export interface IBlock {
  id: number;
  classId: number;
  cell?: any;
  x?: number;
  y?: number;
  info?: any;
}

export interface ILink {
  id: number;
  from: number;
  to: number;
  cell?: any;
  info?: any;
}

@Injectable({
  providedIn: 'root'
})
export class BlocksService {
  blocks: IBlock[] = [
    {
      id: 1,
      classId: 1,
      cell: null,
      x: 300,
      y: 300,
    },
    {
      id: 2,
      classId: 2,
      cell: null,
      x: 400,
      y: 360
    }
  ];

  links: ILink[] = [
    {
      id: 1,
      from: 2,
      to: 1,
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
        b.cell = null;
      }
      return b;
    });
    this.links = [...ls];
  }
}
