const User = require("../Modal/user");

// add user
const addUser = async (req, res) => {
  try {
    const { name, age, contact, address, email } = req.body;
    const user = new User({ name, age, contact, address, email });
    console.log(user);
    const addUser = await user.save();
    res.status(200).json({ message: "user created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
// get all user
const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ length: user.length, data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
// get single user
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
// delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "user has been deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
// update user
const updateUser = async (req, res) => {
  const user = {
    name: req.body.name,
    age: req.body.age,
    contact: req.body.contact,
    address: req.body.address,
    email: req.body.email,
  };
  const update = await User.findByIdAndUpdate({ _id: req.params.id }, user);
  res.status(200).json({ oldInfo: update, updatedInfo: user });
};

module.exports = {
  addUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
