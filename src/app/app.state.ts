import { IProduct } from './models/product/product';
import { IUser } from './models/user/user';

export interface AppState {
  readonly products: IProduct[];
  readonly user: IUser;
}
