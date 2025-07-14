import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-FAQ',
  standalone: true,
  imports: [RouterModule, AccordionModule],
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.css'],
})
export class FAQComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
