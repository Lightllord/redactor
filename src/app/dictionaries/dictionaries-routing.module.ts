import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListComponent} from './components/list/list.component';
import {ElementsComponent} from './components/elements/elements.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: ':name',
        component: ElementsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionariesRoutingModule { }
