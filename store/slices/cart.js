import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const storeSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveCartItems: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { saveExposure } = storeSlice.actions;

export default storeSlice.reducer;
