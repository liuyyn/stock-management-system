const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema (for product)
// a Schema maps to a MongoDB collection and defines the SHAPE of the documents within that collection
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", ProductSchema); // an instance of a model is called document
// models are responsible for creating and reading documents from the underlying MongoDB database
// when calling mongoose.model() on a schema, Mongoose compiles a model for you
// makes a copy of ItemSchema
