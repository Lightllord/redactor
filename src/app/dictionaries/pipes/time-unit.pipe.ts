import {Pipe, PipeTransform} from '@angular/core';
import {ParametersService} from '../../shared/services/parameters.service';

@Pipe({
  name: 'timeUnit'
})
export class TimeUnitPipe implements PipeTransform {

  constructor(private ps: ParametersService) {

  }

  transform(value: string, args?: any): any {
    let str = value;
    let reg = /\{mtu\}/;
    return str.replace(reg, this.ps.parameters.modelTimeUnit.short);
  }

}
