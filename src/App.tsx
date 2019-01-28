import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
// import throttle from 'lodash/throttle';
import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import './App.scss';
import { saveState } from './common/utils';
import configureStore from './redux/configureStore';
import Routes from './routes';

const history = createBrowserHistory();

const store = configureStore(history);

store.subscribe(
  // throttle(() => {
  () =>
    saveState({
      user: store.getState().user
    })
  // }, 5)
);

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Routes />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
