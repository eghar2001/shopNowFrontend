import { Flash } from './../../interfaces/Flash';
import { Component, inject } from '@angular/core';
import { FlashComponent } from './flash/flash.component.js';
import { FlashService } from '../../services/flash/flash.service.js';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-flash-messages',
  standalone: true,
  imports: [FlashComponent, NgFor],
  templateUrl: './flash-messages.component.html',
  styleUrl: './flash-messages.component.css'
})
export class FlashMessagesComponent {
  flashService = inject(FlashService)
}
