import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  recentSearches: [],
};

const recentSlice = createSlice({
  name: 'recent',
  initialState,
  reducers: {
    addRecentSearch(state, action) {
      state.recentSearches = [
        action.payload,
        ...state.recentSearches.filter(item => item !== action.payload),
      ].slice(0, 5);
    },
    clearRecentSearches(state) {
      state.recentSearches = [];
    },
  },
});

export const {addRecentSearch, clearRecentSearches} = recentSlice.actions;

export default recentSlice.reducer;
