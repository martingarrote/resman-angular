import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './create-customer.component';
import { CreateCustomerRoutingModule } from './create-customer-routing.module';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';


@NgModule({
  declarations: [
    CreateCustomerComponent
  ],
  imports: [
    CommonModule,
    CreateCustomerRoutingModule,
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ]
})
export class CreateCustomerModule { }
