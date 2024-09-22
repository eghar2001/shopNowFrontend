import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from '../products/shopping-list/shopping-list/shopping-list.component.js';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,ShoppingListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isShoppingListExpanded: boolean =false;


    toggleShoppingList(){
      this.isShoppingListExpanded = !this.isShoppingListExpanded;
    }
}
