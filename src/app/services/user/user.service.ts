import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../../config.js';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/User.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = API_URL
  private _http = inject(HttpClient)
  constructor() {

  }

  loginUser(email:String, password:String):Observable<any>{
    const data = {email, password}
    const url = `${this.baseUrl}/login`
    return this._http.post(url,data);

  }


  registerUser(user:User):Observable<any>{
    const url = `${this.baseUrl}/register`;
    return this._http.post(url, user);
  }




}
