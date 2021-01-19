import { configureStore } from "@reduxjs/toolkit";
import allProducts from "./productReducer";

export const store = configureStore({
  reducer: {
    products: allProducts,
  },
});
