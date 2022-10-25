import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./sidemenuSlice";
import collectionRedux from "./collectionRedux";
import likedRedux from "./likedSongs";
import newReleaseRedux from "./newReleaseRedux";

export default configureStore({
  reducer: {
    menu: menuReducer,
    collection: collectionRedux,
    likedSongs: likedRedux,
    newRelease: newReleaseRedux,
  },
});
