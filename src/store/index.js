import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice"; // імпортуємо редуктор для кемперів
import favoritesReducer from "./favoritesSlice"; // імпортуємо редуктор для обраних кемперів

const store = configureStore({
  reducer: {
    campers: campersReducer, // підключаємо редуктор для кемперів
    favorites: favoritesReducer, // підключаємо редуктор для обраних кемперів
  },
});

export { store }; // експортуємо store
