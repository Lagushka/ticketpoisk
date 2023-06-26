import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cinema } from "./types";

const initialState: Cinema[] = [];

export const cinemasSlice = createSlice({
  name: "cinemas",
  initialState,
  reducers: {
    addCinemas: (state, action: PayloadAction<Cinema[]>) => {
      state.push(...action.payload)
    }
  }
})

export const { addCinemas } = cinemasSlice.actions;

export default cinemasSlice.reducer;