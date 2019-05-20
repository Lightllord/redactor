import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedactorComponent} from './components/redactor/redactor.component';
import {RedactorRoutingModule} from './redactor-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [RedactorComponent],
  imports: [
    CommonModule,
    RedactorRoutingModule,
    SharedModule
  ]
})
export class RedactorModule {
}
