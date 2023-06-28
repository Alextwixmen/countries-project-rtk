import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light',
  reducers: {
    setTheme: (_, action) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
