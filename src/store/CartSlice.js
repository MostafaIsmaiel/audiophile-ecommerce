import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = localStorage.getItem("cartItems");
const useLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : [];

const CartSlice = createSlice({
  name: "cart",
  initialState: useLocalStorage,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload.product;
      const counter = action.payload.counter;
      const modified = state.find((item) => item.id === product.id);

      if (modified) {
        modified.counter += counter;
      } else {
        state.push({ ...product, counter });
      }
    },

    deleteProduct: (state, action) => {
      const newProducts = state.filter(
        (product) => product.id !== action.payload
      );
      return newProducts;
    },

    removeAll: (state) => {
      state.length = 0;
    },

    increasCount: (state, action) => {
      const modified = state.find((item) => item.id === action.payload);
      modified.counter += 1;
    },
    decreasCount: (state, action) => {
      const modified = state.find((item) => item.id === action.payload);
      modified.counter -= 1;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  removeAll,
  increasCount,
  decreasCount,
} = CartSlice.actions;

export default CartSlice.reducer;
