import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedactorComponent} from './components/redactor/redactor.component';
import {RedactorRoutingModule} from './redactor-routing.module';
import {SharedModule} from '../shared/shared.module';
import { BlockInfoComponent } from './components/block-info/block-info.component';

@NgModule({
  declarations: [RedactorComponent, BlockInfoComponent],
  imports: [
    CommonModule,
    RedactorRoutingModule,
    SharedModule
  ]
})
export class RedactorModule {
}
