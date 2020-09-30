import * as type from "./types";
import axios from "axios";

export const addProduct = (product) => (dispatch) => {
  // POST request to add a product to mongoDB
  axios.post("/products", product).then((res) =>
    dispatch({
      type: type.ADD_PRODUCT,
      payload: res.data, // added product in the response
    })
  );
};

export const getProducts = () => (dispatch) => {
  // GET all products
  axios
    .get("/products")
    .then((res) =>
      dispatch({
        type: type.GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
