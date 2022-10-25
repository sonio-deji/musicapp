import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    sidebar: false,
  },
  reducers: {
    changeState: (state) => {
      if (state.sidebar === false) {
        state.sidebar = true;
      } else {
        state.sidebar = false;
      }
    },
  },
});
export const { changeState } = menuSlice.actions;
export default menuSlice.reducer;
