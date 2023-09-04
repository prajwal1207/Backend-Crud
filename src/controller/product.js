const Product = require("../Modal/product");

// add product
const addProduct = async (req, res) => {
  try {
    const { name, price, category, colour } = req.body;
    const product = new Product({
      name,
      price,
      category,
      colour,
    });
    const addedProduct = await product.save();
    res.status(200).json({ message: "product added succesfully" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

// get product
const getAllProducts = async (req, res) => {
  try {
    const allProduct = await Product.find();
    console.log(allProduct);
    res
      .status(200)
      .json({ data: allProduct, response: "success", resCode: 200 });
  } catch (error) {
    console.log(error);
  }
};

// get single product

const getSingleProduct = async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    res.status(200).json(getProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// delete product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deletePro = await Product.deleteOne({ _id: id });
    res.status(200).json({ message: "Product deleted succesfully" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};

// update product

const updateProduct = async (req, res) => {
  try {
    const product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      colour: req.body.colour,
    };
    const updatePro = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      product
    );
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getSingleProduct,
};
