import produce from 'immer';
import {
  ADD_TO_ORDER_AMOUNT,
  INITIALIZE_ORDER,
  UPDATE_ORDER,
  UPDATE_ORDER_AMOUNT
} from '../actions/order';

type orderType = 'SELL' | 'BUY';

export interface Order {
  type: orderType;
  amount: number;
  productId: string;
}

export const initialOrder: Order = {
  type: 'BUY',
  amount: 0,
  productId: ''
};

export const orderReducer = (order = initialOrder, action: any) => {
  switch (action.type) {
    case ADD_TO_ORDER_AMOUNT: {
      return produce(order, draft => {
        const updated = draft.amount + action.amount;
        if (updated < 0) draft.amount = 0;
        else draft.amount = updated;
      });
    }
    case UPDATE_ORDER_AMOUNT: {
      return produce(order, draft => {
        draft.amount = action.amount;
      });
    }
    case INITIALIZE_ORDER: {
      return initialOrder;
    }
    case UPDATE_ORDER: {
      return { ...order, ...action.order };
    }
    default: {
      return order;
    }
  }
};
