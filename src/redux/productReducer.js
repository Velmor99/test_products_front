import { createReducer } from "@reduxjs/toolkit";
import productAction from "./productAction";

const initialState = null;

const products = createReducer(initialState, {
  [productAction.getProductsSuccess]: (state, action) =>
    (state = [...action.payload]),
});

const reducer = products;

export default reducer;
