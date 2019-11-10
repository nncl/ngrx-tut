import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product/product';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  products: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.products = store.select('products');
  }

  ngOnInit() {
  }

}
