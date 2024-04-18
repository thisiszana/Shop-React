import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../Features/Product/productSlice";
import cartReducer from "../Features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
