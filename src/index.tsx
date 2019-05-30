import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store/configureStore';

import * as registerServiceWorker from '@/registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// console.log(registerServiceWorker);
registerServiceWorker.register();
