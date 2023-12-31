import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCommonModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTreeModule
  ],
  exports: [
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTreeModule
  ]
})
export class MaterialImportsModule { }