import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './core/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'redactor',
        pathMatch: 'full'
      },
      {
        path: 'redactor',
        loadChildren: './redactor/redactor.module#RedactorModule'
      },
      {
        path: 'dictionaries',
        loadChildren: './dictionaries/dictionaries.module#DictionariesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
