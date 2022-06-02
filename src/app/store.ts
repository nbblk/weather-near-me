import { configureStore, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();

export default store;
