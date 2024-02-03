// configureStore.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
import { api } from '../../services/api';
import { setupListeners } from '@reduxjs/toolkit/query';

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
});
const persistConfig = {
  key: 'mb_cond',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Create the store with type inference
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
