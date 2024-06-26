import { api } from './api';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from 'src/features';

export const store = configureStore({
  reducer: {
    ...reducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
