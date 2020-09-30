const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv"); // allows us to create global variables
dotenv.config({ path: "./config/.env" });

const products = require("./routes/products");

// create an express app
const app = express();

app.use(express.json()); // allows the app to parse data from the body

// use code from products.js
app.use("/products", products);

// DB config - get mongoDB URI string
db = process.env.mongoURI;

// connecting to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("MongoDB connected...".blue.bold))
  .catch((e) => console.log(e));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
