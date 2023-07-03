const express = require("express");
const router = express.Router();
const { getProducts, showProduct } = require("../controllers/products");

router.get("/", getProducts);

router.get("/:id", showProduct);

module.exports = router;
