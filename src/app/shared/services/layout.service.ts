import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

  public closeSidebar: boolean = true;
  public fullScreen: boolean = false;
  public isLanguage: boolean = false;
  public isSearchOpen: boolean = false;
  public margin: number = 0;
  public scrollMargin: number = -4500;

  public config  = {
    settings: {
      layout_type: 'ltr',
      layout_version: 'dark-only',//'light-only',
      sidebar_type: 'compact-wrapper modern-type',
      icon: "stroke-svg",
      layout: ''
    },
    color: {
      primary: '#799F0C',
      secondary: '#838383',
    },
  };
}
