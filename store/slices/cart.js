import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveCartItems: (state, action) => {
      state.cart = action.payload;
    },
  }
});

export const { saveCartItems } = cartSlice.actions;

export default cartSlice.reducer;
