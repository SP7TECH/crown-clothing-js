const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controller/error");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//     console.log("This always runs");
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.errorPage);

app.listen(3000, () => {
    console.log("Server started");
});