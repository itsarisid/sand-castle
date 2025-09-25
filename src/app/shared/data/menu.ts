import { BehaviorSubject } from "rxjs";
import { Menu } from "../interface/menu";

export const menuItems: Menu[] = [
  {
    main_title: 'general'
  },
  {
    title: 'Dashboard',
    id: 'dashboard',
    icon: 'home',
    type: 'link',
    path: '/dashboard',
    level: 1,
  },
]

// Array
export const items = new BehaviorSubject<Menu[]>(menuItems);
