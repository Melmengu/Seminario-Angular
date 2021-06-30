import { Component, OnInit } from '@angular/core';
import { Sucursales } from './Sucursales';


@Component({
  selector: 'app-capriccio-sucursales',
  templateUrl: './capriccio-sucursales.component.html',
  styleUrls: ['./capriccio-sucursales.component.scss']
})
export class CapriccioSucursalesComponent implements OnInit {
  sucursal : Sucursales [] = [
    {
    "image": "assets/img/sucursalmdq.jpg",
    "addres": "Av. Colon y Corrientes -",
    "phone": "0223 445 7789 -",
    "city": "Mar del Plata",
  },
  {
    "image": "assets/img/sucursalTandil.jpg",
    "addres": "9 de Julio Nº525 -",
    "phone": "0249 4435687 -",
    "city": "Tandil",
  },
  {
    "image": "assets/img/sucursalbsas.jpg",
    "addres": "Arevalo Nº2357 -",
    "phone": "011 5777-6770 -",
    "city": "Palermo, Capital Federal",
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
