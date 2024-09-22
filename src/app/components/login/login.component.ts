import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service.js';
import { FlashService } from '../../services/flash/flash.service.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  _userService = inject(UserService);
  _flashService = inject(FlashService);
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })



  onSubmit(){
    const email = this.loginForm.value.email as string;
    const password = this.loginForm.value.password as string;
    const response = this._userService.loginUser(email, password).subscribe({
      next: (res) => {
        //Habra un unico mensaje de que el login fue correcto
        const mensaje = res.messages[0];
        this._flashService.flash({message:mensaje, type:"success"})
      },
      error: (err) => {
        const mensajes = err.error.messages;
        mensajes.forEach((msj:string) => this._flashService.flash({message:msj, type:"danger"}) )
      },
      complete: () => console.log('http request completed')
    }
    );
  }
}
