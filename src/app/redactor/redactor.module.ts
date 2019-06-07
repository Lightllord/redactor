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
import {LoadersComponent} from './components/loaders/loaders.component';
import {SenderGoodsTableComponent} from './components/sender-goods-table/sender-goods-table.component';
import {SenderContainerDialogComponent} from './components/sender-container-dialog/sender-container-dialog.component';
import {DistGoodsTableComponent} from './components/dist-goods-table/dist-goods-table.component';
import { TransportParkComponent } from './components/transport-park/transport-park.component';
import { ServiceCostComponent } from './components/service-cost/service-cost.component';

@NgModule({
  declarations: [
    RedactorComponent,
    BlockInfoComponent,
    GoodsTableComponent,
    LinkInfoComponent,
    ParametersDialogComponent,
    ContainerDialogComponent,
    LoadersComponent,
    SenderGoodsTableComponent,
    SenderContainerDialogComponent,
    DistGoodsTableComponent,
    TransportParkComponent,
    ServiceCostComponent
  ],
  imports: [
    CommonModule,
    RedactorRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ParametersDialogComponent,
    ContainerDialogComponent,
    SenderContainerDialogComponent
  ]
})
export class RedactorModule {
}
