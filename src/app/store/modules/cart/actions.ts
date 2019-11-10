import { Action } from '@ngrx/store';
import { IProduct } from '../../../models/product/product';

export const PRODUCT_ADD = '@product/add';
export const PRODUCT_REMOVE = '@product/remove';

export class AddProduct implements Action {
  readonly type = PRODUCT_ADD;

  constructor(public payload: IProduct) {
  }
}

export class RemoveProduct implements Action {
  readonly type = PRODUCT_REMOVE;

  constructor(public payload: number | string) {
  }
}

export type Actions = AddProduct | RemoveProduct;
