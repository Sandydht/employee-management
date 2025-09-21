import { Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication/authentication-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((c) => c.Login)
  },
  {
    path: '',
    canActivate: [authenticationGuard],
    loadComponent: () => import('./layouts/content-container/content-container').then((c) => c.ContentContainer),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard)
      },
      {
        path: 'employee',
        loadComponent: () => import('./pages/employee/employee').then((c) => c.Employee)
      },
      {
        path: 'report',
        children: [
          {
            path: 'payroll',
            loadComponent: () => import('./pages/report/payroll/payroll').then((c) => c.Payroll)
          },
          {
            path: 'attendance',
            loadComponent: () => import('./pages/report/attendance/attendance').then((c) => c.Attendance)
          },
        ]
      }
    ]
  }
];
