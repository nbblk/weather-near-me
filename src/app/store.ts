import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@features/api/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
