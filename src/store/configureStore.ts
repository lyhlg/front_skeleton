/* eslint-disable no-underscore-dangle */
import { createStore, Store } from 'redux';

import modules, { StoreState } from './modules';

export default function configureStore(): Store<StoreState> {
  const store = createStore(
    modules,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
