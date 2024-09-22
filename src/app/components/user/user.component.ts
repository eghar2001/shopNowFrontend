import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  nombreYApellido:string = "Marco Ruben";
  username:string="penguinfucker69";
  telefono:string = "+54341260222";
  mail:string="nahucarc2@gmail.com";


  mensajeBienvenida:string = "Hola! Me comunico desde ShopNow"


  whatsappLink: string = `https://api.whatsapp.com/send?phone=${this.telefono}&text=${this.mensajeBienvenida}`
  callLink:string = `tel:${this.telefono}`;
  mailLink:string = `mailto:${this.mail}`
}
