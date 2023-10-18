import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "home"},
  {
    path: "home", 
    loadChildren: () => import("./components/home/home.module")
    .then((m) => m.HomeModule),
  },
  {
    path: "cadastrar/cliente",
    loadChildren: () => import('./components/create-customer/create-customer.module')
      .then((m) => m.CreateCustomerModule)
  },
  {
    path: "cadastrar/sala",
    loadChildren: () => import('./components/create-room/create-room.module')
      .then((m) => m.CreateRoomModule)
  },
  {
    path: "cadastrar/reserva",
    loadChildren: () => import('./components/create-reservation/create-reservation.module')
      .then((m) => m.CreateReservationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }