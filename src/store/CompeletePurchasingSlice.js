import { createSlice } from "@reduxjs/toolkit";

const CompeletePurchasingSlice = createSlice({
  name: "purchasingModal",
  initialState: { openModal: false },
  reducers: {
    togglePurchasingModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { togglePurchasingModal } = CompeletePurchasingSlice.actions;

export default CompeletePurchasingSlice.reducer;
