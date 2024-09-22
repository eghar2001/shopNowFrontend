import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../product-card/product-card/product-card.component.js';
import { ShoppingListItem } from '../../../../interfaces/ShoppingListItem.js';
import { Product } from '../../../../interfaces/Product.js';

@Component({
  selector: 'app-shopping-list',
  standalone:true,
  imports:[CommonModule,FormsModule,ProductCardComponent],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{
/* PROPIEDADES */
    shoppingList: ShoppingListItem[] = [];       /* Implemento un arreglo de interfaces*/
    isShoppingListVisible =  false;              //Propiedad de visibilidad*/

    newProduct: Product ={
      id:0,
      title:'',
      price: 0,
      imagen:''
    };

    newQuantity: number = 1;


/*CONSTRUCTOR*/
    constructor() {
      /*datos ejemplo*/
      this.shoppingList=[
        {
        product: {
          id: 1,
          title: 'Manzanas',
          price: 3.50,
          imagen: 'https://via.placeholder.com/150?text=Manzanas'
        },
        quantity: 5
      },
      {
        product: {
          id: 2,
          title: 'Pan',
          price: 1.20,
          imagen: 'https://via.placeholder.com/150?text=Pan'
        },
        quantity: 2
      },

      ];
    }

/* MÉTODOS*/
      toggleShoppingList(){
        this.isShoppingListVisible = !this.isShoppingListVisible;
      }            /* este metodo no sé si es necesario*/ /* en el navbar hay otro que maneja la visibilidad */

      incrementQuantity(index: number){
        this.shoppingList[index].quantity++;
      }

      decrementQuantity(index: number) {
      if (this.shoppingList[index].quantity > 1) {
        this.shoppingList[index].quantity--;
        }
      }

      generateId(): number {
      return this.shoppingList.length > 0
        ? Math.max(...this.shoppingList.map(item => item.product.id)) + 1
        : 1;
      }

      addProduct(){
        const newItem: ShoppingListItem = {
          product: {...this.newProduct, id: this.generateId()}, //Genero ID único      /*ESTA MAL , TOMAR ID DEL PRODUCTO EXISTENTE */
            quantity: this.newQuantity
          };
          this.shoppingList.push(newItem);
          this.resetForm();
        }


      removeProduct(index: number) {
      this.shoppingList.splice(index, 1);
      }

      resetForm() {
        this.newProduct = {
          id: 0,
          title: '',
          price: 0,
          imagen: ''
        };
        this.newQuantity = 1;
      }



}
