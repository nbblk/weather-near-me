import { combineReducers } from '@reduxjs/toolkit';
import { summarySlice } from '../features/summary/summarySlice';
import { chartSlice } from '../features/chart/chartSlice';
import { mapSlice } from '../features/map/mapSlice';

const rootReducer = combineReducers({
  summary: summarySlice.reducer,
  chart: chartSlice.reducer,
  map: mapSlice.reducer,
});

export type RootState = ReturnType<any>;

export default rootReducer;
