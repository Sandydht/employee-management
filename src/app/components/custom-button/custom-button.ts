import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [NgClass],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css'
})
export class CustomButton {
  @Input() type: 'submit' | 'button' = 'button';
  @Input() disabled?: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() label: string = '';
}
