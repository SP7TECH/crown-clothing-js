const express = require("express");
const adminController = require("../controller/admin");

const router = express.Router();

router.get("/add-product", adminController.getAddProductPage);

router.get("/products", adminController.getProducts);

router.post("/product", adminController.postAddProduct);

module.exports = router;