import { createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch data from API

const ESlice = createSlice({
  name: "E",
  initialState: { items: [], status: "idle", error: null },
  reducers: {
    setDataE: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const EActions = ESlice.actions;
export default ESlice.reducer;
