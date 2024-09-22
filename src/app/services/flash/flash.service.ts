import { Injectable, signal } from '@angular/core';
import { Flash } from '../../interfaces/Flash.js';

@Injectable({
  providedIn: 'root'
})
export class FlashService {
  flashList = signal([] as Flash[])
  constructor() {
  }
  flash(flash:Flash):void{
    this.flashList.update( value => {
      value.push(flash)
      return value;
    })
  }
}
