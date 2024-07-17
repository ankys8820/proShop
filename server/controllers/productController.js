import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch All Products
// route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products).status(200);
});

// @desc Fetch a Product
// route GET /api/product/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404).json({ message: "Product not Found!" });
});

export { getProducts, getProductById };
