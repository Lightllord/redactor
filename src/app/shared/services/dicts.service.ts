import {Injectable} from '@angular/core';

export interface IDictDescField {
  title: string;
  name: string; // {mtu} is changed by MTU
  fields?: DictDescField[];
  type?: 'text' | 'number' | 'dict' | 'select' | 'custom';
  dict?: string;
  options?: any[];
  column?: boolean;
}

export interface IDictDesc {
  name: string;
  title: string;
  fields: DictDescField[];
}

export class DictDescField implements IDictDescField {
  dict: string;
  fields: DictDescField[];
  name: string; // {mtu} is changed by MTU
  title: string;
  type: 'text' | 'number' | 'dict' | 'select' | 'custom';
  options: any[];
  column: boolean;

  constructor(desc: IDictDescField) {
    this.title = desc.title;
    this.name = desc.name;
    this.type = desc.type || 'text';
    this.dict = desc.dict;
    this.fields = desc.fields;
    this.options = desc.options;
    this.column = desc.column;
  }
}

export class DictDesc {
  name: string;
  title: string;
  fields: DictDescField[];

  constructor(desc: IDictDesc) {
    this.name = desc.name;
    this.title = desc.title;
    this.fields = desc.fields;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DictsService {
  descs: DictDesc[] = [
    new DictDesc({
      name: 'goods', title: 'Товары', fields: [
        new DictDescField({name: 'name', title: 'Наименование', column: true}),
        new DictDescField({name: 'expiring', title: 'Срок годности ({mtu})', type: 'number', column: true}),
        new DictDescField({name: 'length', title: 'Длина (м)', type: 'number'}),
        new DictDescField({name: 'width', title: 'Ширина (м)', type: 'number'}),
        new DictDescField({name: 'height', title: 'Высота (м)', type: 'number'}),
        new DictDescField({name: 'weight', title: 'Вес (кг)', type: 'number'}),
        new DictDescField({name: 'price', title: 'Цена (р)', type: 'number', column: true}),
        new DictDescField({name: 'packs', title: 'Упаковки', type: 'custom'})
      ]
    }),
    new DictDesc({
      name: 'transports', title: 'Транспорт', fields: [
        new DictDescField({name: 'name', title: 'Наименование', column: true}),
        new DictDescField({
          name: 'type',
          title: 'Тип',
          type: 'select',
          options: ['Автоперевозки', 'Ж/Д перевозки', 'Авивперевозки', 'Судоперевозки'],
          column: true
        }),
        new DictDescField({name: 'speed', title: 'Скорость транспорта  (м/{mtu})'}),
        new DictDescField({name: 'fuel', title: 'Расход топлива на 100км'}),
        new DictDescField({name: 'price', title: 'Стоимость обслуживания (р)', column: true}),
      ]
    }),
    new DictDesc({
      name: 'containers', title: 'Контейнеры', fields: [
        new DictDescField({name: 'name', title: 'Наименование', column: true}),
        new DictDescField({
          name: 'type',
          title: 'Тип',
          type: 'dict',
          dict: 'transports',
          column: true
        }),
        new DictDescField({name: 'length', title: 'Длина (м)', type: 'number'}),
        new DictDescField({name: 'width', title: 'Ширина (м)', type: 'number'}),
        new DictDescField({name: 'height', title: 'Высота (м)', type: 'number'}),
        new DictDescField({name: 'weight', title: 'Вес (кг)', type: 'number'}),
        new DictDescField({name: 'duration', title: 'Длительность загрузки/разгруки {mtu}', type: 'number'}),
      ]
    })
  ];

  dictionaryValues = {
    transports: [],
    containers: [],
    goods: []
  };
  dictionaries = ['transports', 'containers', 'goods'];

  constructor() {
    this.dictionaries.forEach(d => {
      let fl = localStorage.getItem('dict-' + d);
      if (fl) {
        this.dictionaryValues[d] = JSON.parse(fl);
      }
    });
  }

  addToDict(name: string, el: any) {
    this.dictionaryValues[name].push(el);
    localStorage.removeItem('dict-' + name);
    localStorage.setItem('dict-' + name, JSON.stringify(this.dictionaryValues[name]));
  }

  change(name: string, el: any, val: any) {
    let found = this.dictionaryValues[name].find(dv => dv === el);
    if (found) {
      Object.assign(found, val);
      localStorage.removeItem('dict-' + name);
      localStorage.setItem('dict-' + name, JSON.stringify(this.dictionaryValues[name]));
    }
  }

  remove(name: string, el: any) {
    let foundIndex = this.dictionaryValues[name].findIndex(dv => dv === el);
    if (foundIndex > -1) {
      this.dictionaryValues[name].splice(foundIndex, 1);
      localStorage.removeItem('dict-' + name);
      localStorage.setItem('dict-' + name, JSON.stringify(this.dictionaryValues[name]));
    }
  }

  getDesc(name: string): DictDesc {
    return this.descs.find(el => el.name === name);
  }

  getDictVals(name: string) {
    return this.dictionaryValues[name];
  }
}
