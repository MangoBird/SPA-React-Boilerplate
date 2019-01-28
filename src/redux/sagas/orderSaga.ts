import { call, put, select } from 'redux-saga/effects';
import { initializeOrder } from '../actions/order';
import { mockOrderApiCall } from '../apis';
import { ReduxState } from '../reducers';
import { Order } from '../reducers/order';

export const getOrderFromState = (state: ReduxState) => state.order;

export function* orderSaga() {
  const order: Order = yield select(getOrderFromState);

  try {
    const { status } = yield call(mockOrderApiCall, order.productId);

    if (status === 200) {
      yield put(initializeOrder());
    }
  } catch (err) {
    console.log(err);
  }
}
