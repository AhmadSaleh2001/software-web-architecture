var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var logger = require("morgan");
const { Connect, Conn } = require("./helper/DB");
const { user } = require("./models/user");
const { product } = require("./models/product");
const { shoppingCart } = require("./models/shoppingCart");
const { order } = require("./models/order");
const { orderProduct } = require("./models/orderProduct");

let userRoutes = require("./routes/userRoutes");
let productRoutes = require("./routes/productRoutes");
let shoppingCartRoutes = require("./routes/cartRoutes");
let orderRoutes = require("./routes/orderRoutes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", shoppingCartRoutes);
app.use("/order", orderRoutes);

app.listen(1212, async () => {
  try {
    await Connect();

    console.log("Running ...");
  } catch (Err) {
    console.log(Err);
  }
});
