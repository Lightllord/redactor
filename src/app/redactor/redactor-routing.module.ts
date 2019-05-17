import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RedactorComponent} from './components/redactor/redactor.component';

const routes: Routes = [
  {
    path: '',
    component: RedactorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedactorRoutingModule { }
