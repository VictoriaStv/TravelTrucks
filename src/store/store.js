import { configureStore } from "@reduxjs/toolkit";

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
import { trailerReducer } from "./trailerSlice";
import { filtersReducer } from "./filters/slice";
import { locationReducer } from "./location/slice";
import { favouritesReducer } from "./favourites/slice";
import { modalReducer } from "./modal/slice";

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

export const store = configureStore({
  reducer: {
    trailers: trailerReducer,
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    location: locationReducer,
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer),
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
