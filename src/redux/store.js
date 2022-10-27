import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./sidemenuSlice";
import collectionRedux from "./collectionRedux";
import likedRedux from "./likedSongs";
import newReleaseRedux from "./newReleaseRedux";
import nowPlaying from "./nowPlayingRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  menu: menuReducer,
  collection: collectionRedux,
  likedSongs: likedRedux,
  newRelease: newReleaseRedux,
  nowPlaying: nowPlaying,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
// export default configureStore({
//   reducer: {
//     menu: menuReducer,
//     collection: collectionRedux,
//     likedSongs: likedRedux,
//     newRelease: newReleaseRedux,
//     nowPlaying: nowPlaying,
//   },
// });
