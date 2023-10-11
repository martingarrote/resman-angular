import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialImportsModule } from '../../shared/material-imports/material-imports.module'


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
