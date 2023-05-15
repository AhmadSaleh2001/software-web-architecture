var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var logger = require("morgan");
const { Connect, Conn } = require("./DB");

let orderRoutes = require("./routes/orderRoutes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/order", orderRoutes);

app.listen(1215, async () => {
  try {
    await Connect();

    console.log("Running ...");
  } catch (Err) {
    console.log(Err);
  }
});
