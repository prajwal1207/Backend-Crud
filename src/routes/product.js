const product = require("../controller/product");
const router = require("express").Router();

router.post("/add-product", product.addProduct);
router.get("/get-product", product.getAllProducts);
router.get("/get-product/:id", product.getSingleProduct);
router.delete("/delete-product/:id", product.deleteProduct);
router.patch("/update-product/:id", product.updateProduct);

module.exports = router;
