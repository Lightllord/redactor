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
        path: 'smth',
        loadChildren: './redactor/redactor.module#RedactorModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
