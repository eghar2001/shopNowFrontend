import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash',
  standalone: true,
  imports: [NgClass],
  templateUrl: './flash.component.html',
  styleUrl: './flash.component.css'
})
export class FlashComponent implements OnInit {

  @Input({required:true}) message:string | undefined;
  @Input({required:true}) type:string | undefined;
  alertClass:string|undefined;

  ngOnInit(): void {
    this.alertClass = `alert alert-${this.type} alert-dismissible`
  }




}
