import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component.js';
import { MainMenuComponent } from './main-menu/main-menu.component.js';
import { MainProductComponent } from './main-menu/main-product/main-product.component.js';
import { UserComponent } from './user/user.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainMenuComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEndShopNow';
}
