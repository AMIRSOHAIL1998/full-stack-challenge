import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducers from './usersSlice';
import authReducers from './auth';

const clientReducers = combineReducers({
  users: userReducers,
  auth: authReducers,
});

const persistConfig = {
  key: 'ClientAppRoot',
  storage: storage,
  whiteList: ['userProfile'],
  blacklist: [],
};

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    return clientReducers(undefined, action);
  }
  return clientReducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const webStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const webPersistor = persistStore(webStore);

export { webStore, webPersistor, clientReducers };
