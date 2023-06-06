var express = require("express");
var path = require("path");
var logger = require("morgan");
var app = express();
const { Connect, Conn } = require("./DB/DB");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const { getFromPostQueue } = require("./services/Posts-Queue");
const { NotificationConsumer } = require("./services/Notification-Queue");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(process.argv[2], async () => {
  try {
    await Connect();
    await getFromPostQueue();
    await NotificationConsumer();
    console.log("Running ...");
  } catch (err) {
    console.log(err);
  }
});
