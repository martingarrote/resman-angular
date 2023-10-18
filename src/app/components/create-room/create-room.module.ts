import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoomComponent } from './create-room.component';
import { CreateRoomRoutingModule } from './create-reservation-routing.module';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';


@NgModule({
  declarations: [
    CreateRoomComponent
  ],
  imports: [
    CommonModule,
    CreateRoomRoutingModule,
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ]
})
export class CreateRoomModule { }
