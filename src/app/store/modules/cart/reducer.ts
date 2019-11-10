import * as CartActions from './actions';
import { IProduct } from '../../../models/product/product';

const INITIAL_STATE: IProduct[] = [];

export function cartReducer(state: IProduct[] = INITIAL_STATE,
                            action: CartActions.Actions) {
  switch (action.type) {
    case CartActions.PRODUCT_ADD:
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.map(item => ({
          ...item,
          amount: item.id === action.payload.id
            ? item.amount += 1
            : item.amount,
        }));
      } else {
        return [...state, {
          ...action.payload,
          amount: 1
        }];
      }
    case CartActions.PRODUCT_REMOVE:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
