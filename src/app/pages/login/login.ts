import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password.validator';
import { CustomInput } from '../../components/custom-input/custom-input';
import { CustomInputPassword } from '../../components/custom-input-password/custom-input-password';
import { CommonModule } from '@angular/common';
import { CustomButton } from '../../components/custom-button/custom-button';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CustomInput,
    CustomInputPassword,
    CommonModule,
    CustomButton
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private readonly fromBuilder: FormBuilder
  ) { 
    this.loginForm = this.fromBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]]
    });
  }

  onSubmit(): void {
    console.log('onSubmit: ', this.loginForm.value);
  }
}
