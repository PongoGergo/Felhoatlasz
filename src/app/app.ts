import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor() {}

  toggleNavBar() {
    this.mobileNavCollapse = !this.mobileNavCollapse;
  }
}
