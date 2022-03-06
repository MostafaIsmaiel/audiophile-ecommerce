import { configureStore } from "@reduxjs/toolkit";
import product from "./ProductSlice";
import cart from "./CartSlice";
import cartModal from "./CartModalSlice";

const store = configureStore({
  reducer: {
    product,
    cart,
    cartModal,
  },
});

export default store;
