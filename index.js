const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json());

// connect to db
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Import routes
const productRoutes = require("./src/routes/product");
const user = require("./src/routes/user");

// Route Middleweres
app.use("/", productRoutes);
app.use("/user", user);

app.listen(process.env.DB_PORT || 3000, () =>
  console.log("server up and runing on port 4000!")
);
