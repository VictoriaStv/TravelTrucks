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
import { trailerReducer } from "./trailerSlise";
import campersReducer from "./campersSlice";

import { favouritesReducer } from "./sliceFavourites";
import { modalReducer } from "./modal";

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
    filters: persistReducer(filtersPersistConfig, campersReducer), 
    location: campersReducer, 
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
