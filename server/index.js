import express from "express";
import "dotenv/config";

import cors from "cors";
import "./db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

const port = process.env.PORT || 5000;

// midddlewares
app.use(cors());
app.use(express.json());

// import routes
app.use("/api/products/", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
