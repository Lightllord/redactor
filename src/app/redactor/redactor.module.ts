import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedactorComponent} from './components/redactor/redactor.component';
import {RedactorRoutingModule} from './redactor-routing.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [RedactorComponent],
  imports: [
    CommonModule,
    RedactorRoutingModule,
    MatCardModule
  ]
})
export class RedactorModule {
}
