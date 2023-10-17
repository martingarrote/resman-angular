import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';
import { CustomerSelectModule } from '../customer-select/customer-select.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialImportsModule,
    CustomerSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
