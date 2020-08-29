// import { v4 as uuid } from "uuid";

const initialState = {
  companies: [
    {
      id: "1",
      name: "Eska",
    },
    {
      id: "2",
      name: "Naya",
    },
    {
      id: "3",
      name: "Doritos",
    },
    {
      id: "4",
      name: "Mondoux",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
