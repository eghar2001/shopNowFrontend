import { Component, inject, OnInit } from '@angular/core';
import { MainProductComponent } from './main-product/main-product.component.js';
import { CarrouselComponent } from "./carrousel/carrousel.component.js";
import { FlashService } from '../../services/flash/flash.service.js';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MainProductComponent, CarrouselComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit{

  flashService = inject(FlashService)


  ngOnInit(): void {
    this.flashService.flash({message:"Mensaje de prueba",type:"danger"});
    this.flashService.flash({message:"Mensaje de prueba",type:"success"});
    setTimeout(() => this.flashService.flash({message:"Mensaje de prueba",type:"primary"}),1500);
  }

}
