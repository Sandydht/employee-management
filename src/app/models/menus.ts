export interface Menus {
  activeIcon: string;
  inactiveIcon: string;
  link: string;
  label: string;
  child: Menus[];
}

export interface ChildMenu {
  activeIcon: string;
  inactiveIcon: string;
  link: string;
  label: string;
}
