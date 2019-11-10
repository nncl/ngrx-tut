import { IProduct } from './models/product/product';

export interface AppState {
  readonly products: IProduct[];
}
