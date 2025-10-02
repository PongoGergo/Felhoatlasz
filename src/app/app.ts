import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Felhőatlasz';
  mobileNavCollapse = true;
  isShow: boolean = false;
  servicesDropdownOpen: boolean = false;
  aboutDropdownOpen: boolean = false;
  topPosToStartShowing = 100;
  closeServicesTimeout: any = null;
  closeAboutTimeout: any = null;

  constructor() {}

  toggleNavBar() {
    this.mobileNavCollapse = !this.mobileNavCollapse;
  }

  @HostListener('window:scroll')
  checkScroll() {
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  onMouseEnter(type: 'services' | 'about') {
    if (type === 'services') {
      this.servicesDropdownOpen = true;
      if (this.closeServicesTimeout) {
        clearTimeout(this.closeServicesTimeout);
        this.closeServicesTimeout = null;
      }
    } else if (type === 'about') {
      this.aboutDropdownOpen = true;
      if (this.closeAboutTimeout) {
        clearTimeout(this.closeAboutTimeout);
        this.closeAboutTimeout = null;
      }
    }
  }

  onClick(type: 'services' | 'about') {
    if (type === 'services') {
      this.servicesDropdownOpen = !this.servicesDropdownOpen;
    } else if (type === 'about') {
      this.aboutDropdownOpen = !this.aboutDropdownOpen;
    }
  }

  onMouseLeave(type: 'services' | 'about') {
    if (type === 'services') {
      this.closeServicesTimeout = setTimeout(() => {
        this.servicesDropdownOpen = false;
        this.closeServicesTimeout = null;
      }, 200);
    } else if (type === 'about') {
      this.closeAboutTimeout = setTimeout(() => {
        this.aboutDropdownOpen = false;
        this.closeAboutTimeout = null;
      }, 200);
    }
  }

  collapseAll() {
    this.servicesDropdownOpen = false;
    this.aboutDropdownOpen = false;
    this.mobileNavCollapse = true;
  }
}
