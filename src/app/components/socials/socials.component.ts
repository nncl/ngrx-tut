import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import * as UserActions from '../../store/modules/user/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {
  accessToken: string;

  constructor(private authService: AuthService, private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  sign(provider: string) {
    const id = provider === 'google' ? GoogleLoginProvider.PROVIDER_ID : FacebookLoginProvider.PROVIDER_ID;
    this.authService.signIn(id)
      .then(res => {
        const {authToken, name: email} = res;
        this.store.dispatch(new UserActions.AddUser({email, password: null}));
        this.accessToken = authToken;
      })
      .catch(err => console.error(err));
  }

  signOut(): void {
    this.authService.signOut().then(() => this.accessToken = null);
  }

}
