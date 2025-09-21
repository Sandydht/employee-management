import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() buttonType?: 'primary' | 'secondary' = 'primary';

  @Output() eventClick: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.eventClick?.emit();
  }
}
