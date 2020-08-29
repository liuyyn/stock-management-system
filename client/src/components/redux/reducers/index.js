import { combineReducers } from "redux";
import productReducer from "./productReducer";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
  products: productReducer,
  companies: companyReducer,
});

export default rootReducer;
