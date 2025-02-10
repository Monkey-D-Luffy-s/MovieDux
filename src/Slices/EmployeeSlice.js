import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://localhost:7175/List");
  return await response.json();
});
// Define slice
const dataSlice = createSlice({
  name: "data",
  initialState: { emp: [] },
  reducers: {
    setData: (state, action) => {
      state.emp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.emp = action.payload;
    });
  },
});

export const empActions = dataSlice.actions;
export default dataSlice.reducer;
