import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomButton } from '../../custom-button/custom-button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-confirmation-modal',
  imports: [
    CustomButton,
    NgClass
],
  templateUrl: './confirmation-modal.html',
  styleUrl: './confirmation-modal.css'
})
export class ConfirmationModal {
  @Input() isShow: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() isLoading?: boolean = false;

  @Output() cancelAction = new EventEmitter();
  @Output() confirmAction = new EventEmitter();

  onCancel(): void {
    this.cancelAction.emit();
  }

  onConfirm(): void {
    this.confirmAction.emit();
  }
}
