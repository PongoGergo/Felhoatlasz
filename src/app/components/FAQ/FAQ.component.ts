import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-FAQ',
  standalone: true,
  imports: [RouterModule, AccordionModule, CardModule],
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.css'],
})
export class FAQComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
