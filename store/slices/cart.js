import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  finalCart: ""
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveCartItems: (state, action) => {
      state.cart = action.payload;
    },
    saveFinalCart: (state, action) => {
      state.finalCart = action.payload;
    },
  },
});

export const { saveCartItems, saveFinalCart } = cartSlice.actions;

export default cartSlice.reducer;
