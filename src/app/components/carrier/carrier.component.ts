import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrier',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css'],
})
export class CarrierComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
