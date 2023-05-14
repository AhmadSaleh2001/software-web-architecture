var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const cors = require("cors");

var logger = require("morgan");
const { Connect, Conn } = require("./DB");

let userRoutes = require("./routes/userRoutes");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);

app.listen(1212, async () => {
  try {
    await Connect();

    console.log("Running ...");
  } catch (Err) {
    console.log(Err);
  }
});
