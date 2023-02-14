import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  searchInput: '',
};

export const dataSlice = createSlice({
  name: 'DataRedux',
  initialState,
  reducers: {
    UPDATE_DATA: (state, action) => {
      return { ...state, data: action.payload };
    },
    UPDATE_SEARCH_INPUT: (state, action) => {
      return { ...state, searchInput: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { UPDATE_DATA, UPDATE_SEARCH_INPUT } = dataSlice.actions;

export default dataSlice.reducer;
