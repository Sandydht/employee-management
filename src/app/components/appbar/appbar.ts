import { Component } from '@angular/core';
import { ConfirmationModal } from '../modals/confirmation-modal/confirmation-modal';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage-service/storage-service';

@Component({
  selector: 'app-appbar',
  imports: [ConfirmationModal],
  templateUrl: './appbar.html',
  styleUrl: './appbar.css'
})
export class Appbar {
  isShowLogoutConfirmationModalBox: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService
  ) { }

  openLogoutConfirmationModalBox(): void {
    this.isShowLogoutConfirmationModalBox = true;
  }

  cancelLogoutConfirmationModalBox(): void {
    this.isShowLogoutConfirmationModalBox = false;
  }

  confirmLogoutConfirmationModalBox(): void {
    this.isShowLogoutConfirmationModalBox = false;
    this.storageService.clear();
    this.router.navigate(['/login']);
  }
}
