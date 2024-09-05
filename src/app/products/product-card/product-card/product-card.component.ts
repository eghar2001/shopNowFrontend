import { Component, input } from '@angular/core';
import { Product } from '../../../interfaces/Product.js';
@Component({
  selector: 'app-product-card',
  standalone:true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  product = input.required<Product>();
}


