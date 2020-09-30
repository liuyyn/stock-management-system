const express = require("express");
const router = express.Router();

// Product Model
const Product = require("../models/Product");

// ROUTES
// GET /products : get all products
router.get("/", (req, res) => {
  Product.find()
    .sort({ name: 1 })
    .then((products) => res.json(products))
    .catch((err) => console.log(err));
});

// POST /products : add a product
router.post("/", (req, res) => {
  // create a new Product document for save
  const newProduct = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    company: req.body.company,
    category: req.body.category,
  });

  newProduct
    .save()
    .then((product) => res.status(200).json(product)) // send added product back
    .catch((err) => res.send(500).json(err));
});

module.exports = router;
