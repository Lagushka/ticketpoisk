import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "./types";

const initialState: Cart = {
  sum: 0,
  byFilm: {}
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    decrement: (state, action: PayloadAction<string>) => {
      state.byFilm[action.payload] -= 1;
      state.sum -= 1;
    },
    increment: (state, action: PayloadAction<string>) => {
      if (!isNaN(state.byFilm[action.payload])) {
        state.byFilm[action.payload] += 1;
      } else {
        state.byFilm[action.payload] = 1;
      }
      state.sum += 1;
    },
    deleteTickets: (state, action: PayloadAction<string>) => {
      if (state.byFilm[action.payload]) {
        state.sum -= state.byFilm[action.payload]
      } 
      state.byFilm[action.payload] = 0
    }
  }
})

export const { decrement, increment, deleteTickets } = cartSlice.actions;

export default cartSlice.reducer;