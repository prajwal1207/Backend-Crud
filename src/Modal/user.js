const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: { type: String, required: true, default: null },
  age: { type: Number, required: true, default: null },
  contact: { type: Number, required: true, default: null, unique: true },
  address: { type: String, default: null },
  email: { type: String, default: null },
});

module.exports = mongoose.model("User", user);
