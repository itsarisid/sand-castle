import { BehaviorSubject } from "rxjs";
import { Menu } from "../interface/menu";

export const menuItems: Menu[] = [
  {
    main_title: 'general'
  },
  {
    title: 'dashboards',
    id: 'dashboards',
    icon: 'home',
    path: '/dashboard',
    active: true,
    level: 1,
    badge: true,
    badge_value: "13",
    badge_color: 'primary',
  },
]

// Array
export const items = new BehaviorSubject<Menu[]>(menuItems);
