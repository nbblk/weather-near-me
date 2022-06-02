import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SummaryState {
  currentCity: string;
}

const initialState: SummaryState = {
  currentCity: 'seoul',
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { changeCity } = summarySlice.actions;

export default summarySlice.reducer;
