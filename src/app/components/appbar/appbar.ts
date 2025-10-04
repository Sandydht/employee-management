import { Component } from '@angular/core';
import { ConfirmationModal } from '../modals/confirmation-modal/confirmation-modal';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage-service/storage-service';
import { AuthenticationService } from '../../services/authentication-service/authentication-service';
import { LogoutResponse } from '../../models/authentication';
import { Observable } from 'rxjs';
import { UserState } from '../../store/user/user.reducer';
import { Store } from '@ngrx/store';
import { selectProfileValue } from '../../store/user/user.selector';
import { UserData } from '../../models/user';

@Component({
  selector: 'app-appbar',
  imports: [ConfirmationModal],
  templateUrl: './appbar.html',
  styleUrl: './appbar.css'
})
export class Appbar {
  isShowLogoutConfirmationModalBox: boolean = false;
  isLoadingLogout: boolean = false;
  user$!: Observable<UserState | null>;
  userData: UserData | null = null;

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly authenticationService: AuthenticationService,
    private readonly storeService: Store
  ) {
    this.user$ = this.storeService.select(selectProfileValue);
    this.user$.subscribe({
      next: (response: UserState | null) => {
        this.userData = response?.user || null;
      }
    })
  }

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
        },
        error: () => {
          this.storageService.clear();
          this.router.navigate(['/login']);
        }
      })
      .add(() => {
        this.isLoadingLogout = false;
      })
  }
}
