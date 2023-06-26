import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlice";

type Cinema = {
  id: string,
  name: string,
  movieIds: string[],
};

export const serviceStore = configureStore({
  reducer: {
    films: filmsReducer
  }
});

export type RootState = ReturnType<typeof serviceStore.getState>;

export type AppDispatch = typeof serviceStore.dispatch;