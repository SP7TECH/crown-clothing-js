const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router.get("/add-product", productController.getAddProductPage);

router.post("/product", productController.postAddProduct);

module.exports = router;