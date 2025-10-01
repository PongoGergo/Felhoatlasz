import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-szamvitel',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './szamvitel.component.html',
  styleUrls: ['./szamvitel.component.css'],
})
export class SzamvitelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
