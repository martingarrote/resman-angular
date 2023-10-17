import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSelectComponent } from './customer-select.component';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';
import { ServicesModule } from 'src/app/@core/services/services.module';



@NgModule({
  declarations: [
    CustomerSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
    ServicesModule
  ],
  exports: [
    CustomerSelectComponent
  ]
})
export class CustomerSelectModule { }
