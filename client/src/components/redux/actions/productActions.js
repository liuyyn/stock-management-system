import * as type from "./types";

export const addProduct = (product) => {
  return { type: type.ADD_PRODUCT, payload: product };
};
