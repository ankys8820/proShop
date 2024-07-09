import mongoose from "mongoose";

mongoose
  .connect(process.env.MURL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });
