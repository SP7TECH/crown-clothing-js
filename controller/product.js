const Product = require("../model/product");

exports.getAddProductPage = (req, res, next) => {
    res.render("add-product", {pageTitle: "Add Products"});
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop", {pageTitle: "My Shop", prods: products});
    });
}

