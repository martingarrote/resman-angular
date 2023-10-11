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
  }
// modificar para roteamento das entidades  
//   {
//     path: "novo", 
//     loadChildren: () => import('./entidade')
//     .then((m) => m.entidadeModule),
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }