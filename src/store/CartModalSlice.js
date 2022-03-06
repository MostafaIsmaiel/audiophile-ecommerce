import { createSlice } from "@reduxjs/toolkit";

const CartSliceModal = createSlice({
  name: "cart",
  initialState: { openModal: false },
  reducers: {
    toggleModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { toggleModal } = CartSliceModal.actions;

export default CartSliceModal.reducer;
