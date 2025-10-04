import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomInput } from '../../components/custom-input/custom-input';
import { CustomInputPassword } from '../../components/custom-input-password/custom-input-password';
import { CommonModule } from '@angular/common';
import { CustomButton } from '../../components/custom-button/custom-button';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/authentication';
import { AuthenticationService } from '../../services/authentication-service/authentication-service';
import { StorageService } from '../../services/storage-service/storage-service';

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
  isLoading: boolean = false;

  constructor(
    private readonly fromBuilder: FormBuilder,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
    private readonly storageService: StorageService
  ) {
    this.loginForm = this.fromBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]]
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    this.authenticationService.login(this.loginForm.value)
      .subscribe({
        next: (response: LoginResponse) => {
          if (response.status == 'OK' && response.accessToken) {
            this.storageService.setItem('accessToken', JSON.stringify(response.accessToken));
            this.router.navigate(['/dashboard']);
          }
        }
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
