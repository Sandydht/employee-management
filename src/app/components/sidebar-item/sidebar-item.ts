import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css'
})
export class SidebarItem {
  @Input() activeIcon: string = '';
  @Input() inactiveIcon: string = '';
  @Input() label: string = 'Dashboard';
  @Input() link: string = '/dashboard';
  @Input() isActive: boolean = false;
}
