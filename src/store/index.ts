import { configureStore } from '@reduxjs/toolkit';
import { ProgressState } from './ducks/progress/types';

import rootReducer from './ducks/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from '@/services/api';
import { setupListeners } from '@reduxjs/toolkit/query';

export interface ApplicationState {
  progress: ProgressState;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(api.middleware);
  },
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export default store;
