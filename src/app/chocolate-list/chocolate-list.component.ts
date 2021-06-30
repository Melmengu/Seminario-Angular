import { Component, OnInit } from '@angular/core';
import { CapriccioCartService } from '../capriccio-cart.service';
import { Chocolate } from './Chocolate';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {

  chocolates : Chocolate [] = [
    {
    "chocolate": "BOMBONES RELLENOS - chocolate negro, relleno de dulce de leche y almendras",
    "units": 12,
    "image": "assets/img/bombones.jpg",
    "price": 300,
    "stock": 0,
    "clearance": false,
    "clearance1": false,
    "quantity": 0,
  },
  {
    "chocolate": "TABLETA DE CHOCOLATE - 200grs - 80% cacao",
    "units": 1,
    "image": "assets/img/chocolates.jpg",
    "price": 150,
    "stock": 3,
    "clearance": false,
    "clearance1": false,
    "quantity": 0,
  },
  {
    "chocolate": "BOMBONES SABORIZADOS - frutilla, menta, coco, avellanas, vainilla ",
    "units": 12,
    "image": "assets/img/bombones2.jpg",
    "price": 250,
    "stock": 3,
    "clearance": true,
    "clearance1": true,
    "quantity": 0,
  },
  {
    "chocolate": "FRUTILLAS BAÑADAS -  (bañadas en chocolate negro o blanco)",
    "units": 10,
    "image": "assets/img/bombones3.jpg",
    "price": 350,
    "stock": 4,
    "clearance": false,
    "clearance1": false,
    "quantity": 0,
  },
  {
    "chocolate": "POPCAKES - chupetines de masa bañados en chocolate",
    "units": 1,
    "image": "assets/img/popcake.jpg",
    "price": 35,
    "stock": 45,
    "clearance": true,
    "clearance1": true,
    "quantity": 0,
  },
  {
    "chocolate": "CUPCAKE - masa de vainilla o chocolate, bañados en chocolate, rellenos de dulde de leche",
    "units": 8,
    "image": "assets/img/bombones4.jpg",
    "price": 450,
    "stock": 6,
    "clearance": false,
    "clearance1": false,
    "quantity": 0,
  },
  ];
  
  constructor(private cart: CapriccioCartService) {
   }
   

  ngOnInit(): void {
  }

 addToCart(chocolate: Chocolate): void{
    this.cart.addToCart(chocolate);
    chocolate.stock -= chocolate.quantity;
    chocolate.quantity = 0;
    
  }
maxReached(m: string) {
  alert (m);
}

}