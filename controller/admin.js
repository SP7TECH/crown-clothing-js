const Product = require("../model/product");

exports.getAddProductPage = (req, res, next) => {
    res.render("admin/add-product", {pageTitle: "Add Products"});
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("admin/products", {pageTitle: "Admin Products Page", prods: products})
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, description, imageURL, price);
    product.save();
    res.redirect("/");
}