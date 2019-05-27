import {NgModule} from '@angular/core';
import {ListComponent} from './components/list/list.component';
import {SharedModule} from '../shared/shared.module';
import {DictionariesRoutingModule} from './dictionaries-routing.module';
import {MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { ElementsComponent } from './components/elements/elements.component';
import { TimeUnitPipe } from './pipes/time-unit.pipe';

@NgModule({
  declarations: [
    ListComponent,
    ElementsComponent,
    TimeUnitPipe
  ],
  imports: [
    SharedModule,
    DictionariesRoutingModule,
    MatTabsModule,
    RouterModule
  ]
})
export class DictionariesModule {
}
