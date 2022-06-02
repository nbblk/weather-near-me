import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MapState {
  currentCity: string;
}

const initialState: MapState = {
  currentCity: 'seoul',
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { changeCity } = mapSlice.actions;

export default mapSlice.reducer;
