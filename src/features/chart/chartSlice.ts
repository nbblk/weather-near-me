import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChartState {
  currentCity: string;
}

const initialState: ChartState = {
  currentCity: 'seoul',
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { changeCity } = chartSlice.actions;

export default chartSlice.reducer;
