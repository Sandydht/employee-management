import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../../../services/storage-service/storage-service';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthenticationService } from '../../../services/authentication-service/authentication-service';
import { RefreshResponse } from '../../../models/authentication';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const storageService = inject(StorageService);
  const authenticationService = inject(AuthenticationService);
  const accessToken = storageService.getItem('accessToken');

  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        const userId = storageService.getItem('userId') || null;
        if (userId) {
          return authenticationService.refresh({ userId: String(userId) }).pipe(
            switchMap((response: RefreshResponse) => {
              let newReq = req;

              if (response.status == 'OK' && response.accessToken) {
                storageService.setItem('accessToken', JSON.stringify(response.accessToken));

                newReq = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${response.accessToken}`
                  },
                });
              }

              return next(newReq);
            })
          )
        }

        return throwError(() => error);
      }

      return throwError(() => error);
    })
  );
};
