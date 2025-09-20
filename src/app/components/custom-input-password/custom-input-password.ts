import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input-password',
  imports: [CommonModule],
  templateUrl: './custom-input-password.html',
  styleUrl: './custom-input-password.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputPassword),
      multi: true,
    },
  ],
})
export class CustomInputPassword implements ControlValueAccessor {
  @Input() id: string = '';

  isShowPassword: boolean = false;
  value: string = '';
  onChange = (value: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleIsShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
