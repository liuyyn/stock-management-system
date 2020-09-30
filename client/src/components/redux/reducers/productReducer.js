import * as type from "../actions/types";
// import { v4 as uuid } from "uuid";

// const initialState = {
//   products: [
//     {
//       id: uuid(),
//       name: "Eska water 100ml",
//       quantity: 10,
//       price: 1.1,
//       company: "Eska",
//       category: "Water",
//     },
//     {
//       id: uuid(),
//       name: "Eska water 200ml",
//       quantity: 10,
//       price: 1.1,
//       company: "Eska",
//       category: "Water",
//     },
//     {
//       id: uuid(),
//       name: "Jujube",
//       quantity: 40,
//       price: 2.25,
//       company: "Mondoux",
//       category: "Candy",
//     },
//     {
//       id: uuid(),
//       name: "Doritos",
//       quantity: 30,
//       price: 4.5,
//       company: "Doritos",
//       category: "Chips",
//     },
//     {
//       id: uuid(),
//       name: "Naya water 100ml",
//       quantity: 20,
//       price: 1.0,
//       company: "Naya",
//       category: "Water",
//     },
//   ],
// };

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case type.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    default:
      return state;
  }
}
