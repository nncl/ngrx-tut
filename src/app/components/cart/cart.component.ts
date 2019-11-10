import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product/product';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CartActions from '../../store/modules/cart/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.products = store.select('products');
  }

  ngOnInit() {
  }

  remove(id: number | string) {
    this.store.dispatch(new CartActions.RemoveProduct(id));
  }

}
