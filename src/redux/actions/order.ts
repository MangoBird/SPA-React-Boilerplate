import { Order } from '../reducers/order';

export const ADD_TO_ORDER_AMOUNT = 'ADD_TO_ORDER_AMOUNT';
export const UPDATE_ORDER_AMOUNT = 'UPDATE_ORDER_AMOUNT';
export const INITIALIZE_ORDER = 'INITIALIZE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const START_ORDER_PROCESS = 'START_ORDER_PROCESS';

export const addToOrderAmount = (amount: number) => ({
  type: ADD_TO_ORDER_AMOUNT,
  amount
});

export const updateOrderAmount = (amount: number) => ({
  type: UPDATE_ORDER_AMOUNT,
  amount
});

export const initializeOrder = () => ({
  type: INITIALIZE_ORDER
});

export const udpateOrder = (order: Partial<Order>) => ({
  type: UPDATE_ORDER,
  order
});

export const startOrderProcess = () => ({
  type: START_ORDER_PROCESS
});
