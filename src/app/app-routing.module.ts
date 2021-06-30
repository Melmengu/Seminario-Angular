import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapriccioChocolatesComponent } from './capriccio-chocolates/capriccio-chocolates.component';
import { CapriccioSucursalesComponent } from './capriccio-sucursales/capriccio-sucursales.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"chocolates",
    pathMatch:"full"
  },
  {
    path:"chocolates",
    component:CapriccioChocolatesComponent
  },
  {
    path:"sucursales",
    component:CapriccioSucursalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
