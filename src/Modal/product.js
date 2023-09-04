const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: null,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    default: null,
  },
  category: {
    type: String,
    required: true,
    default: null,
  },
  colour: {
    type: String,
    required: true,
    default: null,
  },
});

module.exports = mongoose.model("Product", productSchema);
