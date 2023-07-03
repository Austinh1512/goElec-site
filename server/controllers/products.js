const Product = require("../models/Product");

module.exports.getProducts = async (req, res) => {
  const { q } = req.query;
  console.log(q);
  let products;

  if (q) {
    products = await Product.find({ category: q });
    if (products.length) {
      return res.json(products);
    }
  }

  products = await Product.find({});
  res.json(products);
};

module.exports.showProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
};
