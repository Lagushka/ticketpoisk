import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Film } from "./types";

const initialState: Film[] = [];

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilms: (state, action: PayloadAction<Film[]>) => {
      state.push(...action.payload)
    }
  }
});

export const { addFilms } = filmsSlice.actions;

export default filmsSlice.reducer;