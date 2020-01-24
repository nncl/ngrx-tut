import { Action } from '@ngrx/store';
import { IUser } from '../../../models/user/user';

export const USER_ADD = '@user/add';
export const USER_REMOVE = '@user/remove';

export class AddUser implements Action {
  readonly type = USER_ADD;

  constructor(public payload: IUser) {
  }
}

export class RemoveUser implements Action {
  readonly type = USER_REMOVE;

  constructor() {
  }
}

export type Actions = AddUser | RemoveUser;
