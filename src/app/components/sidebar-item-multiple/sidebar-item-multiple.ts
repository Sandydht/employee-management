import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChildMenu } from '../../models/menus';

@Component({
  selector: 'app-sidebar-item-multiple',
  imports: [
    NgClass,
    RouterLink,
  ],
  templateUrl: './sidebar-item-multiple.html',
  styleUrl: './sidebar-item-multiple.css'
})
export class SidebarItemMultiple implements OnChanges {
  @Input() activeIcon: string = '';
  @Input() inactiveIcon: string = '';
  @Input() label: string = 'Dashboard';
  @Input() link: string = '/dashboard';
  @Input() isActive: boolean = false;
  @Input() child: ChildMenu[] = [];

  showDropdown: boolean = false;

  constructor(
    private readonly router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isActive']?.currentValue) {
      this.showDropdown = true;
    }
  }

  toggleShowDropdown(): void {
    setTimeout(() => {
      this.showDropdown = !this.showDropdown;
    }, 75);
  }

  isActiveRoute(link: string): boolean {
    return Boolean(link.includes(this.router.url));
  }
}
