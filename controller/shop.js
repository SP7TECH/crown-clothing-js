const Product = require("../model/product");

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", {
            pageTitle: "All Products",
            prods: products,
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productID;
    Product.findById(prodId, (product) => {
        res.render("shop/product-detail", {
            pageTitle: product.title,
            productDetail: product,
        });
    });
    // console.log(prodId);
    // res.redirect("/");
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/index", { pageTitle: "My Shop", prods: products });
    });
};

exports.getCart = (req, res, next) => {
    res.render("shop/cart", { pageTitle: "Your Cart" });
};

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", { pageTitle: "Checkout" });
};

exports.getOrders = (req, res, next) => {
    res.render("shop/orders", { pageTitle: "Orders" });
};
