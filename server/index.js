import express from "express";
import "dotenv/config";
import products from "./data/products.js";
import cors from "cors";
import "./db.js";

const app = express();

const port = process.env.PORT || 5000;

// midddlewares
app.use(cors());
app.use(express.json());

// import routes
app.get("/api/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
