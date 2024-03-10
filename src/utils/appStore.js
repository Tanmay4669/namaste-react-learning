import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//Creating Redux Store
const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
