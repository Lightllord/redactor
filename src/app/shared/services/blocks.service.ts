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
  data = {
    'blocks': [
      {
        'id': 5,
        'classId': 3,
        'cell': null,
        'x': 360,
        'y': 260,
        'info': {
          'name': 'Гаити',
          'mat': null,
          'disp': null,
          'rop': null,
          'costService': null,
          'serviceTime': null,
          'workType': null,
          'workDuration': null,
          'workCost': null,
          'workCostRestart': null,
          'workDurationRestart': null,
          'schedules': [
            {
              'blockTo': {
                'id': 6
              },
              'timeFrom': '16',
              'period': '3',
              'containers': []
            },
            {
              'blockTo': {
                'id': 7
              },
              'timeFrom': '24',
              'period': '2',
              'containers': []
            }
          ]
        },
        'html': null
      },
      {
        'id': 6,
        'classId': 3,
        'cell': null,
        'x': 210,
        'y': 260,
        'info': {
          'name': 'Таити',
          'mat': null,
          'disp': null,
          'rop': null,
          'costService': null,
          'serviceTime': null,
          'workType': null,
          'workDuration': null,
          'workCost': null,
          'workCostRestart': null,
          'workDurationRestart': null,
          'schedules': [
            {
              'blockTo': {
                'id': 5
              },
              'timeFrom': '12',
              'period': '2',
              'containers': [
                {
                  'container': {
                    'name': 'Капсуль',
                    'type': {
                      'name': 'ФлайТесла',
                      'type': 'Авивперевозки',
                      'speed': '9999',
                      'fuel': null,
                      'price': null
                    },
                    'length': null,
                    'width': null,
                    'height': null,
                    'weight': null,
                    'duration': null
                  },
                  'count': 12,
                  'price': '1'
                }
              ]
            }
          ]
        },
        'html': null
      },
      {
        'id': 7,
        'classId': 3,
        'cell': null,
        'x': 510,
        'y': 260,
        'info': {
          'name': 'Пипити',
          'mat': null,
          'disp': null,
          'rop': null,
          'costService': null,
          'serviceTime': null,
          'workType': null,
          'workDuration': null,
          'workCost': null,
          'workCostRestart': null,
          'workDurationRestart': null,
          'schedules': [
            {
              'blockTo': {
                'id': 5
              },
              'timeFrom': '15',
              'period': '4',
              'containers': []
            }
          ]
        },
        'html': null
      },
      {
        'id': 8,
        'classId': 2,
        'cell': null,
        'x': 120,
        'y': 80,
        'info': {
          'loaders': {
            'avia': null,
            'zd': null,
            'avto': null,
            'sudo': null
          },
          'goodsOut': [
            {
              'product': {
                'name': 'Яйца',
                'expiring': 1000,
                'length': null,
                'width': null,
                'height': null,
                'weight': 0.1,
                'price': 7,
                'packs': [
                  {
                    'name': 'Десяток',
                    'count': 10,
                    'width': null,
                    'length': null,
                    'height': null
                  },
                  {
                    'name': 'Восьмерок',
                    'count': 8,
                    'width': null,
                    'length': null,
                    'height': null
                  }
                ]
              },
              'pack': {
                'name': 'Десяток',
                'count': 10,
                'width': null,
                'length': null,
                'height': null
              }
            }
          ],
          'name': 'Найсовый',
          'mat': null,
          'disp': null,
          'rop': null,
          'costService': null,
          'serviceTime': null,
          'workType': null,
          'workDuration': null,
          'workCost': null,
          'workCostRestart': null,
          'workDurationRestart': null
        },
        'html': null
      }
    ],
    'links': [
      {
        'id': 0,
        'from': 6,
        'to': 5,
        'cell': {
          'type': 'standard.Link',
          'source': {
            'id': 'd2a7b9c8-9be9-4304-b17f-a7e15d6aac16'
          },
          'target': {
            'id': '4d2df87d-28ec-4ca6-a01c-c76d590ce2de'
          },
          'router': {
            'name': 'manhattan'
          },
          'connector': {
            'name': 'rounded'
          },
          'id': 'd9d6a7d7-834a-4b26-a7ae-4c2df9ba535f',
          'z': 5,
          'attrs': {
            'line': {
              'stroke': '#444444',
              'targetMarker': {
                'type': 'circle',
                'fill': '#666',
                'stroke': '#333',
                'r': 2,
                'cx': 1
              },
              'sourceMarker': {
                'type': 'circle',
                'fill': '#666',
                'stroke': '#333',
                'r': 2,
                'cx': 1
              }
            }
          }
        },
        'info': {
          'paths': [
            {
              'type': 'Ж/Д'
            }
          ]
        }
      },
      {
        'id': 1,
        'from': 5,
        'to': 7,
        'cell': {
          'type': 'standard.Link',
          'source': {
            'id': '4d2df87d-28ec-4ca6-a01c-c76d590ce2de'
          },
          'target': {
            'id': '3e26e1b1-d28c-43dc-b3c1-86f4d76b7cc4'
          },
          'router': {
            'name': 'manhattan'
          },
          'connector': {
            'name': 'rounded'
          },
          'id': 'd44ffa27-9d55-4096-b098-a271b555a819',
          'z': 6,
          'attrs': {
            'line': {
              'stroke': '#444444',
              'targetMarker': {
                'type': 'circle',
                'fill': '#666',
                'stroke': '#333',
                'r': 2,
                'cx': 1
              },
              'sourceMarker': {
                'type': 'circle',
                'fill': '#666',
                'stroke': '#333',
                'r': 2,
                'cx': 1
              }
            }
          }
        },
        'info': {
          'paths': [
            {
              'type': 'Ж/Д'
            }
          ]
        }
      },
      {
        'id': 2,
        'from': 8,
        'to': 6,
        'cell': {
          'type': 'standard.Link',
          'source': {
            'id': '2aaeca61-4e1f-41e2-90b8-82d56edabf2a'
          },
          'target': {
            'id': 'd2a7b9c8-9be9-4304-b17f-a7e15d6aac16'
          },
          'router': {
            'name': 'manhattan'
          },
          'connector': {
            'name': 'rounded'
          },
          'id': '6e78b76d-cd8f-408e-97b4-11c0da39b19a',
          'z': 7,
          'attrs': {
            'line': {
              'stroke': '#444444',
              'targetMarker': {
                'type': 'circle',
                'fill': '#666',
                'stroke': '#333',
                'r': 2,
                'cx': 1
              },
              'sourceMarker': {
                'type': 'circle',
                'fill': '#666',
                'stroke': '#333',
                'r': 2,
                'cx': 1
              }
            }
          }
        },
        'info': {
          'paths': [
            {
              'type': 'Ж/Д'
            }
          ]
        }
      }
    ]
  };
  blocks: IBlock[] = [];
  links: ILink[] = [];

  // blocks: IBlock[] = [
  //   {
  //     id: 0,
  //     classId: 2,
  //     cell: null,
  //     x: 120,
  //     y: 220,
  //     info: {
  //       goodsOut: [
  //         {
  //           product: {name: 'Вкусняхи'},
  //           pack: {name: 'Крутая'}
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     id: 1,
  //     classId: 5,
  //     cell: null,
  //     x: 520,
  //     y: 220,
  //     info: {
  //       goodsIn: [
  //         {
  //           product: {name: 'Вкусняхи'},
  //           count: 100
  //         }
  //       ],
  //       goodsOut: [
  //         {
  //           product: {name: 'Вкусняхи'},
  //           count: 100
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     id: 2,
  //     classId: 3,
  //     cell: null,
  //     x: 320,
  //     y: 240,
  //   },
  //   {
  //     id: 3,
  //     classId: 6,
  //     cell: null,
  //     x: 870,
  //     y: 130,
  //     info: {
  //       goodsIn: [
  //         {
  //           product: {name: 'Вкусняхи'},
  //           count: 70
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     id: 4,
  //     classId: 6,
  //     cell: null,
  //     x: 870,
  //     y: 290,
  //     info: {
  //       goodsIn: [
  //         {
  //           product: {name: 'Вкусняхи'},
  //           count: 30
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     id: 5,
  //     classId: 3,
  //     cell: null,
  //     x: 520,
  //     y: 100,
  //     info: {
  //       name: 'Гондольерский'
  //     }
  //   }
  // ];

  // links: ILink[] = [
  //   {
  //     id: 0,
  //     from: 0,
  //     to: 2,
  //     cell: null,
  //   },
  //   {
  //     id: 1,
  //     from: 2,
  //     to: 1,
  //     cell: null
  //   },
  //   {
  //     id: 2,
  //     from: 1,
  //     to: 3,
  //     cell: null
  //   },
  //   {
  //     id: 3,
  //     from: 1,
  //     to: 4,
  //     cell: null
  //   },
  //   {
  //     id: 4,
  //     from: 2,
  //     to: 5,
  //     cell: null
  //   }
  // ];

  constructor() {
    this.blocks = this.data.blocks;
    this.links = this.data.links;
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
    this.links = ls.map(l => {
      l.cell = null;
      return l;
    });
  }

  download() {
    // this.save(this.blocks, this.links);
    let content = {
      blocks: this.blocks,
      links: this.links
    };
    content.blocks.forEach(b => {
      b.html = null;
      b.cell = null;
      if (b.info && b.info.schedules) {
        b.info.schedules.forEach(s => {
          if (s.blockTo && s.blockTo.info) {
            s.blockTo = {id: s.blockTo.id};
          }
        });
      }
    });
    let a = document.createElement('a');
    let file = new Blob([JSON.stringify(content)], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = 'scheme.json';
    a.click();
    this.blocks = [...this.blocks];
    this.links = [...this.links];
  }
}
