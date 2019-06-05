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
    "blocks": [{
      "cell": null,
      "classId": 3,
      "html": null,
      "id": 5,
      "info": {
        "costService": null,
        "disp": null,
        "mat": null,
        "name": "Гаити",
        "rop": null,
        "schedules": [{
          "blockTo": {
            "id": 6
          },
          "containers": [],
          "period": "3",
          "timeFrom": "16"
        }, {
          "blockTo": {
            "id": 7
          },
          "containers": [],
          "period": "2",
          "timeFrom": "24"
        }
        ],
        "serviceTime": null,
        "workCost": null,
        "workCostRestart": null,
        "workDuration": null,
        "workDurationRestart": null,
        "workType": null
      },
      "x": 190,
      "y": 340
    }, {
      "cell": null,
      "classId": 3,
      "html": null,
      "id": 6,
      "info": {
        "costService": null,
        "disp": null,
        "mat": null,
        "name": "Таити",
        "rop": null,
        "schedules": [{
          "blockTo": {
            "id": 5
          },
          "containers": [{
            "container": {
              "duration": null,
              "height": null,
              "length": null,
              "name": "Капсуль",
              "type": {
                "fuel": null,
                "name": "ФлайТесла",
                "price": null,
                "speed": "9999",
                "type": "Авивперевозки"
              },
              "weight": null,
              "width": null
            },
            "count": 12,
            "price": "1"
          }
          ],
          "period": "2",
          "timeFrom": "12"
        }
        ],
        "serviceTime": null,
        "workCost": null,
        "workCostRestart": null,
        "workDuration": null,
        "workDurationRestart": null,
        "workType": null
      },
      "x": 190,
      "y": 280
    }, {
      "cell": null,
      "classId": 3,
      "html": null,
      "id": 7,
      "info": {
        "costService": null,
        "disp": null,
        "mat": null,
        "name": "Пипити",
        "rop": null,
        "schedules": [{
          "blockTo": {
            "id": 5
          },
          "containers": [],
          "period": "4",
          "timeFrom": "15"
        }
        ],
        "serviceTime": null,
        "workCost": null,
        "workCostRestart": null,
        "workDuration": null,
        "workDurationRestart": null,
        "workType": null
      },
      "x": 190,
      "y": 400
    }, {
      "cell": null,
      "classId": 2,
      "html": null,
      "id": 8,
      "info": {
        "costService": null,
        "disp": null,
        "goodsOut": [{
          "pack": {
            "count": 10,
            "height": null,
            "length": null,
            "name": "Десяток",
            "width": null
          },
          "product": {
            "expiring": 1000,
            "height": null,
            "length": null,
            "name": "Яйца",
            "packs": [{
              "count": 10,
              "height": null,
              "length": null,
              "name": "Десяток",
              "width": null
            }, {
              "count": 8,
              "height": null,
              "length": null,
              "name": "Восьмерок",
              "width": null
            }
            ],
            "price": 7,
            "weight": 0.1,
            "width": null
          }
        }
        ],
        "loaders": {
          "avia": null,
          "avto": null,
          "sudo": null,
          "zd": null
        },
        "mat": null,
        "name": "Найсовый",
        "rop": null,
        "serviceTime": null,
        "workCost": null,
        "workCostRestart": null,
        "workDuration": null,
        "workDurationRestart": null,
        "workType": null
      },
      "x": 110,
      "y": 160
    }, {
      "cell": null,
      "classId": 5,
      "html": null,
      "id": 9,
      "info": {
        "costService": null,
        "disp": null,
        "goodsIn": [{
          "count": "100",
          "name": "Яйца",
          "product": {
            "expiring": 100,
            "height": null,
            "length": null,
            "name": "Яйца",
            "packs": [{
              "count": 10,
              "height": "15",
              "length": "35",
              "name": "Десяток",
              "width": "20"
            }
            ],
            "price": 10,
            "weight": null,
            "width": null
          }
        }
        ],
        "goodsOut": [{
          "count": "50",
          "product": {
            "expiring": 1000,
            "height": null,
            "length": null,
            "name": "Мазик",
            "packs": [{
              "count": 1,
              "height": "15",
              "length": "10",
              "name": "Пачка",
              "width": "10"
            }
            ],
            "price": 40,
            "weight": 200,
            "width": null
          }
        }
        ],
        "loaders": {
          "avia": null,
          "avto": null,
          "sudo": null,
          "zd": null
        },
        "mat": null,
        "name": "Переработчик",
        "rop": null,
        "schedules": [{
          "blockTo": null,
          "containers": null,
          "period": null,
          "timeFrom": null
        }
        ],
        "serviceTime": null,
        "workCost": "15",
        "workCostRestart": "15",
        "workDuration": "2",
        "workDurationRestart": "2",
        "workType": "Прерываемое"
      },
      "x": 380,
      "y": 320
    }, {
      "cell": null,
      "classId": 7,
      "html": null,
      "id": 10,
      "info": {
        "costService": null,
        "disp": null,
        "goodsOut": [{
          "pack": {
            "count": 1,
            "height": "15",
            "length": "10",
            "name": "Пачка",
            "width": "10"
          },
          "product": {
            "expiring": 1000,
            "height": null,
            "length": null,
            "name": "Мазик",
            "packs": [{
              "count": 1,
              "height": "15",
              "length": "10",
              "name": "Пачка",
              "width": "10"
            }
            ],
            "price": 40,
            "weight": 200,
            "width": null
          },
          "rop": "22"
        }
        ],
        "loaders": {
          "avia": null,
          "avto": null,
          "sudo": null,
          "zd": null
        },
        "mat": null,
        "name": "Дистурбет",
        "rop": null,
        "schedules": [{
          "blockTo": null,
          "containers": null,
          "period": null,
          "timeFrom": null
        }
        ],
        "serviceTime": null,
        "workCost": null,
        "workCostRestart": null,
        "workDuration": null,
        "workDurationRestart": null,
        "workType": null
      },
      "x": 640,
      "y": 320
    }, {
      "cell": null,
      "classId": 6,
      "html": null,
      "id": 11,
      "info": {
        "costService": null,
        "disp": null,
        "goodsIn": [{
          "count": "3",
          "product": {
            "expiring": 1000,
            "height": null,
            "length": null,
            "name": "Мазик",
            "packs": [{
              "count": 1,
              "height": "15",
              "length": "10",
              "name": "Пачка",
              "width": "10"
            }
            ],
            "price": 40,
            "weight": 200,
            "width": null
          }
        }
        ],
        "loaders": {
          "avia": null,
          "avto": null,
          "sudo": null,
          "zd": null
        },
        "mat": null,
        "name": "Жироед",
        "rop": null,
        "schedules": [{
          "blockTo": null,
          "containers": null,
          "period": null,
          "timeFrom": null
        }
        ],
        "serviceTime": null,
        "workCost": null,
        "workCostRestart": null,
        "workDuration": null,
        "workDurationRestart": null,
        "workType": null
      },
      "x": 580,
      "y": 450
    }, {
      "cell": null,
      "classId": 6,
      "html": null,
      "id": 12,
      "info": {
        "costService": null,
        "disp": null,
        "loaders": {
          "avia": null,
          "avto": null,
          "sudo": null,
          "zd": null
        },
        "mat": null,
        "name": "Ничегошер",
        "rop": null,
        "schedules": [{
          "blockTo": null,
          "containers": null,
          "period": null,
          "timeFrom": null
        }
        ],
        "serviceTime": null,
        "workCost": null,
        "workCostRestart": null,
        "workDuration": null,
        "workDurationRestart": null,
        "workType": null
      },
      "x": 720,
      "y": 450
    }
    ],
    "links": [{
      "cell": {
        "attrs": {
          "line": {
            "sourceMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            },
            "stroke": "#444444",
            "targetMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            }
          }
        },
        "connector": {
          "name": "rounded"
        },
        "id": "a98b8a75-7f11-4f67-ad75-60e82a49c7a9",
        "router": {
          "name": "manhattan"
        },
        "source": {
          "id": "7892c89c-4101-449e-bfcf-743d745e34c1"
        },
        "target": {
          "id": "fef02110-1908-4ef4-b6f5-5b7a7f65217d"
        },
        "type": "standard.Link",
        "z": 9
      },
      "from": 6,
      "id": 0,
      "info": {
        "paths": [{
          "type": "Ж/Д"
        }
        ]
      },
      "to": 5
    }, {
      "cell": {
        "attrs": {
          "line": {
            "sourceMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            },
            "stroke": "#444444",
            "targetMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            }
          }
        },
        "connector": {
          "name": "rounded"
        },
        "id": "c031c099-2831-4b1d-8cb4-a927f07afb85",
        "router": {
          "name": "manhattan"
        },
        "source": {
          "id": "fef02110-1908-4ef4-b6f5-5b7a7f65217d"
        },
        "target": {
          "id": "306c68e4-b322-4ac6-9c17-fe3e850ca2ba"
        },
        "type": "standard.Link",
        "z": 10
      },
      "from": 5,
      "id": 1,
      "info": {
        "paths": [{
          "type": "Ж/Д"
        }
        ]
      },
      "to": 7
    }, {
      "cell": {
        "attrs": {
          "line": {
            "sourceMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            },
            "stroke": "#444444",
            "targetMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            }
          }
        },
        "connector": {
          "name": "rounded"
        },
        "id": "ff885bae-e850-46ec-8754-009030f78815",
        "router": {
          "name": "manhattan"
        },
        "source": {
          "id": "b0f85a6c-7974-4516-807c-bb1c1bf7a3fd"
        },
        "target": {
          "id": "7892c89c-4101-449e-bfcf-743d745e34c1"
        },
        "type": "standard.Link",
        "z": 11
      },
      "from": 8,
      "id": 2,
      "info": {
        "paths": [{
          "type": "Ж/Д"
        }
        ]
      },
      "to": 6
    }, {
      "cell": {
        "attrs": {
          "line": {
            "sourceMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            },
            "stroke": "#444444",
            "targetMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            }
          }
        },
        "connector": {
          "name": "rounded"
        },
        "id": "476e1f91-7a8d-4804-bde5-cd13a654c8c6",
        "router": {
          "name": "manhattan"
        },
        "source": {
          "id": "306c68e4-b322-4ac6-9c17-fe3e850ca2ba"
        },
        "target": {
          "id": "30e59e32-78bc-45f8-9579-c4df40111dbc"
        },
        "type": "standard.Link",
        "z": 12
      },
      "from": 7,
      "id": 3,
      "info": {
        "paths": [{
          "type": "Ж/Д"
        }
        ]
      },
      "to": 9
    }, {
      "cell": {
        "attrs": {
          "line": {
            "sourceMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            },
            "stroke": "#444444",
            "targetMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            }
          }
        },
        "connector": {
          "name": "rounded"
        },
        "id": "047c4108-6159-4f27-8529-3633288ca6f4",
        "router": {
          "name": "manhattan"
        },
        "source": {
          "id": "30e59e32-78bc-45f8-9579-c4df40111dbc"
        },
        "target": {
          "id": "703203ed-6edd-4ebf-b528-be4b564bbf8b"
        },
        "type": "standard.Link",
        "z": 13
      },
      "from": 9,
      "id": 4,
      "info": {
        "paths": [{
          "type": "Ж/Д"
        }
        ]
      },
      "to": 10
    }, {
      "cell": {
        "attrs": {
          "line": {
            "sourceMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            },
            "stroke": "#444444",
            "targetMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            }
          }
        },
        "connector": {
          "name": "rounded"
        },
        "id": "147c8080-55e5-4691-8864-7422e5a24542",
        "router": {
          "name": "manhattan"
        },
        "source": {
          "id": "703203ed-6edd-4ebf-b528-be4b564bbf8b"
        },
        "target": {
          "id": "30d39120-1b59-499f-9466-c649e7935391"
        },
        "type": "standard.Link",
        "z": 14
      },
      "from": 10,
      "id": 5,
      "info": {
        "paths": [{
          "type": "Ж/Д"
        }
        ]
      },
      "to": 11
    }, {
      "cell": {
        "attrs": {
          "line": {
            "sourceMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            },
            "stroke": "#444444",
            "targetMarker": {
              "cx": 1,
              "fill": "#666",
              "r": 2,
              "stroke": "#333",
              "type": "circle"
            }
          }
        },
        "connector": {
          "name": "rounded"
        },
        "id": "c45a1c76-2236-4b96-a8f8-a01ee19e0afa",
        "router": {
          "name": "manhattan"
        },
        "source": {
          "id": "703203ed-6edd-4ebf-b528-be4b564bbf8b"
        },
        "target": {
          "id": "c2f43bac-58df-48e0-9575-d7cf36525e73"
        },
        "type": "standard.Link",
        "z": 15
      },
      "from": 10,
      "id": 6,
      "info": {
        "paths": [{
          "type": "Ж/Д"
        }
        ]
      },
      "to": 12
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
