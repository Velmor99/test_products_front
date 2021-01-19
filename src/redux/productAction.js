import { createAction } from "@reduxjs/toolkit";

const getProductsRequest = createAction("products/getAllProductsRequest");
const getProductsSuccess = createAction("products/getAllProductsSuccess");
const getProductsError = createAction("products/getAllProductsError");

const actions = {
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
};

export default actions;
