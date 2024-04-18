import { createSlice } from "@reduxjs/toolkit";

import { sumPrice, sumQuantity } from "../../Helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
