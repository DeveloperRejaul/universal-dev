import { api } from '../features/api/api';
import  counterReducer from './../features/counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
