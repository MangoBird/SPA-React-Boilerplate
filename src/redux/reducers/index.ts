import { combineReducers } from 'redux';
import { Order, orderReducer } from './order';

export interface ReduxState {
  order: Order;
}

export default combineReducers({
  order: orderReducer
});
