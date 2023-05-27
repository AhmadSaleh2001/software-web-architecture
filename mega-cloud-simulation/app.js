var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
const { Connect, connection } = require("./DB/Connection");
const FileRouter = require("./routes/FileRoutes");

app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));

app.get("/", (Req, Res) => {
  Res.send("sdfsdf");
});
app.use("/fs", FileRouter);

app.listen(1212, async () => {
  try {
    await Connect();

    console.log("Running ...");
  } catch (err) {
    console.log(err);
  }
});
