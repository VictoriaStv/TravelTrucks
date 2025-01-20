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

// Налаштування Redux store з persisted reducers для фільтрів та улюблених
export const store = configureStore({
  reducer: {
    trailers: trailerReducer, // редуктор для трейлерів
    filters: persistReducer(filtersPersistConfig, campersReducer), // редуктор для фільтрів
    location: campersReducer, // редуктор для місцеположення
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer), // редуктор для улюблених
    modal: modalReducer, // редуктор для модалей
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // ігнорування серіалізації для дії, які обробляє redux-persist
      },
    }),
});

export const persistor = persistStore(store); // для збереження та відновлення persisted state
