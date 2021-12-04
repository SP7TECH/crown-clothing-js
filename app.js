const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//     console.log("This always runs");
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "error-page.html"));
});

app.listen(3000);