import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-purchases',
  standalone: true,
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.css'],
  imports:[CommonModule]
})
export class MyPurchasesComponent implements OnInit  {
  purchaseHistory: Product[] = [
  {
    id: 1,
    title: 'Producto 1',
    price: 1500,
    imagen: 'assets/images/product1.jpg'
  },
  {
    id: 2,
    title: 'Producto 2',
    price: 2500,
    imagen: 'assets/images/product2.jpg'
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  },
  {
    id: 4,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 3500,
    imagen: 'assets/images/product3.jpg'
  }
];



  ngOnInit(): void {
  //ACA VA EL SERVICIO
  }
}




