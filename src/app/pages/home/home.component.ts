import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../models/product/product';
import * as CartActions from '../../store/modules/cart/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  items: IProduct[] = Array.from(Array(10).keys(), n => {
    return {
      id: n,
      name: `Product ${n}`,
      price: 100 + n
    };
  });
  products: Observable<IProduct[]>;
  productsSubscription: Subscription;
  amount: any;

  constructor(private store: Store<AppState>) {
    this.products = store.select('products');
  }

  ngOnInit() {
    this.productsSubscription = this.products.subscribe(state => {
      this.amount = state.reduce((sumAmount, product) => {
        sumAmount[product.id] = product.amount || 0;
        return sumAmount;
      }, {});
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

  add(product: IProduct) {
    this.store.dispatch(new CartActions.AddProduct(product));
  }

}
