import { takeLatest } from 'redux-saga';
import { START_ORDER_PROCESS } from '../actions/order';
import { orderSaga } from './orderSaga';

export default function* rootSaga() {
  yield [takeLatest(START_ORDER_PROCESS, orderSaga)];
}
