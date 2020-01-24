import * as UserActions from './actions';
import { IUser } from '../../../models/user/user';

const INITIAL_STATE: IUser = {email: null, password: null};

export function userReducer(state: IUser = INITIAL_STATE,
                            action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.USER_ADD:
      return state = action.payload;
    case UserActions.USER_REMOVE:
      return state = {email: null, password: null};
    default:
      return state;
  }
}
