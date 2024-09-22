import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service.js';
import { User } from '../../interfaces/User.js';
import { FlashService } from '../../services/flash/flash.service.js';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  _userService = inject(UserService);
  _flashService = inject(FlashService);

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit(){
    const user:User = {
      nombre : this.registerForm.value.nombre as string,
      apellido: this.registerForm.value.apellido as string,
      telefono:this.registerForm.value.telefono as string,
      fechaNacimiento: this.registerForm.value.fechaNacimiento  as string,
      username: this.registerForm.value.username  as string,
      email: this.registerForm.value.email  as string,
      password: this.registerForm.value.password as string

    }
    this._userService.registerUser(user).subscribe({
      next: (res) => {
        const mensaje = res.messages[0];
        this._flashService.flash({message:mensaje,type:"success"})

      },
      error: (err) => {
        const mensajes = err.error.messages;
        mensajes.forEach((msg:string) =>{
          this._flashService.flash({message:msg, type:"danger"});
        });
      },
      complete: () => "Http request completed"
    })
  }
}
