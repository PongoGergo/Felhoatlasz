import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-penzugyi',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './penzugyi.component.html',
  styleUrls: ['./penzugyi.component.css'],
})
export class PenzugyiComponent implements OnInit {
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
