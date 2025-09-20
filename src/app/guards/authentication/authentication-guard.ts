import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../../services/storage-service/storage-service';

export const authenticationGuard: CanActivateFn = () => {
  const router = inject(Router);
  const storageService = inject(StorageService);
  const isLoggedIn = storageService.getItem('access_token');

  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
