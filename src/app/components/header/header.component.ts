import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product/product';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { IUser } from '../../models/user/user';
import * as UserActions from '../../store/modules/user/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  products: Observable<IProduct[]>;
  user: Observable<IUser>;

  constructor(private store: Store<AppState>) {
    this.products = store.select('products');
    this.user = store.select('user');
  }

  ngOnInit() {
  }

  signout() {
    this.store.dispatch(new UserActions.RemoveUser());
  }

}
