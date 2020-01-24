import { Component, OnInit } from '@angular/core';
import * as UserActions from '../../store/modules/user/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { IUser } from '../../models/user/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  user: IUser = {email: null, password: null};

  constructor(private store: Store<AppState>) {
    store.select('user').subscribe(user => {
      const {email} = user;
      this.user.email = email;
    });
  }

  ngOnInit() {
  }

  save() {
    this.store.dispatch(new UserActions.AddUser(this.user));
  }

}
