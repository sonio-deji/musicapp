import { createSlice } from "@reduxjs/toolkit";

const newRelease = createSlice({
  name: "newRelease",
  initialState: {
    songs: {},
  },
  reducers: {
    addSongs: (state, action) => {
      state.songs = { ...action.payload };
    },
    removeSong: (state) => {
      state.songs = {};
    },
  },
});

export default newRelease.reducer;
export const { addSongs, removeSong } = newRelease.actions;
