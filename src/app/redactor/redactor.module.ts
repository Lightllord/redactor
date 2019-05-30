import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedactorComponent} from './components/redactor/redactor.component';
import {RedactorRoutingModule} from './redactor-routing.module';
import {SharedModule} from '../shared/shared.module';
import {BlockInfoComponent} from './components/block-info/block-info.component';
import {GoodsTableComponent} from './components/goods-table/goods-table.component';
import {LinkInfoComponent} from './components/link-info/link-info.component';
import {ParametersDialogComponent} from './components/parameters-dialog/parameters-dialog.component';
import {ContainerDialogComponent} from './components/container-dialog/container-dialog.component';

@NgModule({
  declarations: [
    RedactorComponent,
    BlockInfoComponent,
    GoodsTableComponent,
    LinkInfoComponent,
    ParametersDialogComponent,
    ContainerDialogComponent
  ],
  imports: [
    CommonModule,
    RedactorRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ParametersDialogComponent,
    ContainerDialogComponent
  ]
})
export class RedactorModule {
}
