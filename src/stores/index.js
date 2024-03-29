import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducer';

import AsyncStorage from '@react-native-async-storage/async-storage';

// TAMBAHKAN SETUP REDUX PERSIST
// ...

// let store = createStore(
//   rootReducer,
//   applyMiddleware(promiseMiddleware, logger),
// );
// let persistor = 'TESTING';

// export default {store, persistor};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger),
);
let persistor = persistStore(store);
export default { store, persistor };
