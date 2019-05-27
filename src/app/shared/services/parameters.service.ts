import {Injectable} from '@angular/core';

export interface ITimeUnit {
  name: string;
  short: string;
}

export interface IModelParameters {
  modelTimeUnit: ITimeUnit;
  simulationDuration: number;
}

@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  timeUnits: ITimeUnit[] = [
    {
      name: 'Миллисекунда',
      short: 'мс'
    },
    {
      name: 'Секунда',
      short: 'с'
    },
    {
      name: 'Минута',
      short: 'мин'
    },
    {
      name: 'Час',
      short: 'ч'
    },
    {
      name: 'День',
      short: 'д'
    }
  ];
  parameters: IModelParameters = {
    modelTimeUnit: this.timeUnits[0],
    simulationDuration: 1
  };

  constructor() {
  }
}
