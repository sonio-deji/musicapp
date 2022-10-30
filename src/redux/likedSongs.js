import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "liked",
  initialState: {
    likedSongs: [],
  },
  reducers: {
    addLiked: (state, action) => {
      const itemIndex = state.likedSongs.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.likedSongs[itemIndex]) {
        const nextSong = state.likedSongs.filter(
          (item) => item.id !== action.payload.id
        );
        state.likedSongs = nextSong;
      } else {
        state.likedSongs.push(action.payload);
      }
    },
  },
});

export default likedSlice.reducer;
export const { addLiked } = likedSlice.actions;
