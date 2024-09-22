import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component.js';
import { MainMenuComponent } from './components/main-menu/main-menu.component.js';
import { UserComponent } from './components/user/user.component.js';
import { FlashMessagesComponent } from './components/flash-messages/flash-messages.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NavbarComponent,
            MainMenuComponent,
            UserComponent,
            FlashMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEndShopNow';
  constructor(){
  }
}
