import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CapriccioCartService } from '../capriccio-cart.service';
import { Chocolate } from '../chocolate-list/Chocolate';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Chocolate[]>;
  
  constructor(private cart: CapriccioCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
