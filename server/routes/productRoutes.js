import express from "express";

import Product from "../models/productModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = express.Router();
//

// router.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.send(products).status(200);
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products).status(200);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "Product not Found!" });
  })
);

export default router;
