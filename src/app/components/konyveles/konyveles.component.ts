import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-konyveles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './konyveles.component.html',
  styleUrls: ['./konyveles.component.css'],
})
export class KonyvelesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
