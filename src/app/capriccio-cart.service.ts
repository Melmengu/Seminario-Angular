import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chocolate } from './chocolate-list/Chocolate';
/**
 * maneja la logica del carrito
 */

@Injectable({
  providedIn: 'root'
})
export class CapriccioCartService {
  
  private _cartList: Chocolate[] = [];

  cartList: BehaviorSubject <Chocolate[]> = new BehaviorSubject(this._cartList);

 constructor() { }
  
  addToCart(chocolate:Chocolate){
    let item: Chocolate | undefined = this._cartList.find((v1) => v1.chocolate == chocolate.chocolate);
    if (!item) {
      this._cartList.push({... chocolate});
    }else {
      item.quantity += chocolate.quantity;
    }
    this.cartList.next(this._cartList); //equivalente al emit de eventos

  }

}


