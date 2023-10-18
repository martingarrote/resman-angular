import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReservationComponent } from './create-reservation.component';
import { CreateReservationRoutingModule } from './create-reservation-routing.module';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';


@NgModule({
  declarations: [
    CreateReservationComponent
  ],
  imports: [
    CommonModule,
    CreateReservationRoutingModule,
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ]
})
export class CreateReservationModule { }
