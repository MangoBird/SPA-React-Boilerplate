import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { select } from 'redux-saga/effects';
import { initializeOrder } from '../../../../src/redux/actions/order';
import { mockOrderApiCall } from '../../../../src/redux/apis';
import { initialOrder } from '../../../../src/redux/reducers/order';
import {
  getOrderFromState,
  orderSaga
} from '../../../../src/redux/sagas/orderSaga';

describe('order process handler saga', () => {
  it('initializes order if order succeeds', () => {
    const successRes = {
      status: 200
    };

    return expectSaga(orderSaga)
      .provide([
        [select(getOrderFromState), initialOrder],
        [matchers.call.fn(mockOrderApiCall), successRes]
      ])
      .put(initializeOrder())
      .run();
  });
});
