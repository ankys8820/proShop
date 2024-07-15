import mongoose from "mongoose";
import dotenv from "dotenv";

import users from "./data/users.js";
import products from "./data/products.js";
//
import User from "./models/User.js";
import Product from "./models/productModel.js";
import Order from "./models/Order.js";

dotenv.config();

mongoose
  .connect(process.env.MURL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });

const importData = async () => {
  try {
    // delete all the previous data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    //
    const createUsers = await User.insertMany(users);
    const adminUser = createUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    // console.log("Data inverted !", green.inverse);
    console.log("Data Inverted!");
    process.exit();
  } catch (error) {
    // console.log(`${error}`.red.inverse);
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // console.log("Data Destroyed!".red.inverse);
    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    // console.log(`${error}`.red.inverse);
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
