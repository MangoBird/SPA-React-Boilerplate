import { History } from 'history';
import { Store } from 'redux';

import devConfig from './configureStore.dev';
import prodConfig from './configureStore.prod';

let configureStore: (history: History) => Store;

if (process.env.NODE_ENV === 'production') {
  configureStore = prodConfig;
} else {
  configureStore = devConfig;
}

export default configureStore;
