import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isNavbarVisible = true;
  lastScrollTop = -1;
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollTop < this.lastScrollTop) {
      this.isNavbarVisible = true;
    } else {
      this.isNavbarVisible = false;
    }
    this.lastScrollTop = currentScrollTop;
  }
 
 
}
