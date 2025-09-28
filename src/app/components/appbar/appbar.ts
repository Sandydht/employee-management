import { Component } from '@angular/core';
import { ConfirmationModal } from '../modals/confirmation-modal/confirmation-modal';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage-service/storage-service';
import { AuthenticationService } from '../../services/authentication-service/authentication-service';
import { LogoutResponse } from '../../models/authentication';

@Component({
  selector: 'app-appbar',
  imports: [ConfirmationModal],
  templateUrl: './appbar.html',
  styleUrl: './appbar.css'
})
export class Appbar {
  isShowLogoutConfirmationModalBox: boolean = false;
  isLoadingLogout: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly authenticationService: AuthenticationService
  ) { }

  openLogoutConfirmationModalBox(): void {
    this.isShowLogoutConfirmationModalBox = true;
  }

  cancelLogoutConfirmationModalBox(): void {
    this.isShowLogoutConfirmationModalBox = false;
  }

  confirmLogoutConfirmationModalBox(): void {
    this.isLoadingLogout = true;
    this.authenticationService.logout()
      .subscribe({
        next: (response: LogoutResponse) => {
          if (response.status == 'OK') {
            this.isShowLogoutConfirmationModalBox = false;
            this.storageService.clear();
            this.router.navigate(['/login']);
          }
        }
      })
      .add(() => {
        this.isLoadingLogout = false;
      })
  }
}
