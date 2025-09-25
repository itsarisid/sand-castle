import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { BreadcrumbComponent } from '../../ui/breadcrumb/breadcrumb.component';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-content',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, BreadcrumbComponent, FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {

  public layout: string;

  constructor(public layoutService: LayoutService, private route: ActivatedRoute, private router: Router) {
    this.layout = this.layoutService.config.settings.layout;

    if (this.layout) {
      localStorage.setItem('layout', this.layout);
      this.layoutService.config.settings.layout = this.layout;
      this.layoutService.applyLayout(this.layout);
      document.documentElement.style.setProperty('--theme-default', this.layoutService.config.color.primary);
      document.documentElement.style.setProperty('--theme-secondary', this.layoutService.config.color.secondary);
    }

    if (window.innerWidth < 1200) {
      this.layoutService.closeSidebar = true;
    } else {
      this.layoutService.closeSidebar = false;
    }

    if(window.innerWidth <= 992){
      this.layoutService.config.settings.sidebar_type = 'compact-wrapper';
    }else{
      if(this.layout) {
        this.layoutService.applyLayout(this.layout);
      } else {
        this.layoutService.config.settings.sidebar_type = this.layoutService.config.settings.sidebar_type;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 1200) {
      this.layoutService.closeSidebar = true;
    } else {
      this.layoutService.closeSidebar = false;
    }
  }
}
