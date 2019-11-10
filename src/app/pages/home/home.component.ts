import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any[] = Array.from(Array(10).keys(), n => {
    return {
      id: n,
      name: `Product ${n}`
    };
  });

  constructor() {
  }

  ngOnInit() {
  }

}
