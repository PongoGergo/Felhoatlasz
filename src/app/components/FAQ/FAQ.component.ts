import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-FAQ',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.css'],
})
export class FAQComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
