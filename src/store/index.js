import { configureStore } from "@reduxjs/toolkit";
import product from "./ProductSlice";
import cart from "./CartSlice";
import cartModal from "./CartModalSlice";
import notification from "./NotificationSlice";
import purchasingModal from "./CompeletePurchasingSlice";

const store = configureStore({
  reducer: {
    product,
    cart,
    cartModal,
    notification,
    purchasingModal,
  },
});

export default store;
