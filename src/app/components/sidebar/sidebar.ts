import { Component } from '@angular/core';
import { SidebarItem } from "../sidebar-item/sidebar-item";
import { Router, RouterLink } from '@angular/router';
import { Menus } from '../../models/menus';
import { SidebarItemMultiple } from "../sidebar-item-multiple/sidebar-item-multiple";

@Component({
  selector: 'app-sidebar',
  imports: [
    SidebarItem, 
    SidebarItemMultiple,
    RouterLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  constructor(
    private readonly router: Router
  ) { }

  sidebarData: Menus[] = [
    {
      activeIcon: 'assets/images/svg/home_white_24px.svg',
      inactiveIcon: 'assets/images/svg/home_gray_24px.svg',
      link: '/dashboard',
      label: 'Dashboard',
      child: []
    },
    {
      activeIcon: 'assets/images/svg/assignment_ind_white_24px.svg',
      inactiveIcon: 'assets/images/svg/assignment_ind_gray_24px.svg',
      link: '/employee',
      label: 'Employee',
      child: []
    },
    {
      activeIcon: 'assets/images/svg/assignment_white_24px.svg',
      inactiveIcon: 'assets/images/svg/assignment_gray_24px.svg',
      link: '/report',
      label: 'Reports',
      child: [
        {
          activeIcon: '',
          inactiveIcon: '',
          link: '/report/payroll',
          label: 'Payroll',
          child: []
        },
        {
          activeIcon: '',
          inactiveIcon: '',
          link: '/report/attendance',
          label: 'Attendance',
          child: []
        },
      ]
    },
  ];

  isActiveRoute(link: string): boolean {
    return Boolean(link.includes(this.router.url));
  }
}
