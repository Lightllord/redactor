import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {SharedModule} from '../shared/shared.module';
import {MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    MatTabsModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class CoreModule {
}
