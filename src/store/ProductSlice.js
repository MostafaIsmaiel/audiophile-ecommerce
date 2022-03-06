import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("/data/products.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: { products: [], isLoaded: false },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoaded = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.isLoaded = true;
    },
    [getProducts.rejected]: (state, action) => {
      console.log("Rejected");
    },
  },
});

export default ProductSlice.reducer;
