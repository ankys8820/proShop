import express from "express";
import "dotenv/config";
import products from "./data/products.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Api is running");
});
//
app.get("/api/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
