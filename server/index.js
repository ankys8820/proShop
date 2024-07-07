import express from "express";
import "dotenv/config";
import products from "./data/products.js";

const app = express();

const port = 5000 || process.env.PORT;
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
