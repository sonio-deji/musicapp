import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk("fetch", async () => {
  return fetch("https://musica-api.up.railway.app/new").then((res) =>
    res.json()
  );
});
const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState: {
    nowPlaying: [],
    loading: false,
  },
  extraReducers: {
    [fetchSongs.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSongs.fulfilled]: (state, action) => {
      state.loading = false;
      state.nowPlaying = action.payload;
    },
    [fetchSongs.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying.splice(0, state.nowPlaying.length, action.payload);
    },
  },
});

export default nowPlayingSlice.reducer;
export const { addNowPlaying } = nowPlayingSlice.actions;
