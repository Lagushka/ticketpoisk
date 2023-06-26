import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlice";
import cinemasReducer from "./cinemasSlice";
import cartReducer from "./cartSlice"

export const serviceStore = configureStore({
  reducer: {
    films: filmsReducer,
    cinemas: cinemasReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof serviceStore.getState>;

export type AppDispatch = typeof serviceStore.dispatch;