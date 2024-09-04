import { Component } from '@angular/core';
import { MainProductComponent } from './main-product/main-product.component.js';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MainProductComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
