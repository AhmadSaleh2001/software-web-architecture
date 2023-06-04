var express = require("express");
var path = require("path");
var logger = require("morgan");
var app = express();
const { Connect, Conn } = require("./DB/DB");

const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRouter");
const { getFromOrderQueue } = require("./services/Order-Queue");
const { getFromPaymentQueue } = require("./services/Payment-Queue");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/order", orderRoutes);
app.use("/payment", paymentRoutes);

app.listen(1212, async () => {
  try {
    await Connect();
    getFromOrderQueue();
    getFromPaymentQueue();

    console.log("Running ...");
  } catch (err) {
    console.log(err);
  }
});
