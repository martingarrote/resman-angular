import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ]
})
export class HomeModule { 
  alertStatus = 'success';
  alertMessage = 'Mensagem de sucesso!';
}
