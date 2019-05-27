import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatSelectModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {BlocksService} from './services/blocks.service';
import {ParametersService} from './services/parameters.service';
import {DictsService} from './services/dicts.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [BlocksService, ParametersService, DictsService]
    };
  }
}
