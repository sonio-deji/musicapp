import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collections: [],
    likedSongs: [],
    likeIcon: false,
  },
  reducers: {
    addCollection: (state, action) => {
      state.collections.push(action.payload);
    },
  },
});

export default collectionSlice.reducer;
export const { addCollection } = collectionSlice.actions;
