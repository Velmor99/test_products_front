import axios from "axios";
import productAction from "./productAction";

const getProducts = () => (dispatch, getState) => {
  dispatch(productAction.getProductsRequest());
  axios
    .get("https://products-back.herokuapp.com/api/products/all")
    .then((response) => {
      dispatch(productAction.getProductsSuccess(response.data.products));
    })
    .catch((error) => console.log(error.message));
};

export default getProducts;
