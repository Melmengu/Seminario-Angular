import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CapriccioChocolatesComponent } from './capriccio-chocolates/capriccio-chocolates.component';
import { CapriccioSucursalesComponent } from './capriccio-sucursales/capriccio-sucursales.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChocolateListComponent,
    CartComponent,
    CapriccioChocolatesComponent,
    CapriccioSucursalesComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
